import axios from "axios";
import { useEffect, useState, useCallback, useRef, memo } from "react";
import { useForm } from "react-hook-form";
import { ReCaptcha } from "./ReCaptcha";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const InlineAlert = (props) => {

    let colorClasses = {
        alert: `alert-danger`
    };

    if (props.color) {
        colorClasses = {
            alert: `alert-${props.color}`
        };
    }

    return (
        <>
            <div className={`alert ${colorClasses.alert} my-2`} role="alert">
                {props.msg}
            </div>
        </>
    );
};

const ReCaptchaField = props => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [token, setToken] = useState('empty');
    const gettoken = useRef();
    // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

      await executeRecaptcha('homepage').then((res)=>{
           setToken(res);
       });
       
    }, [executeRecaptcha]);

    // You can use useEffect to trigger the verification as soon as the component being loaded
    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    console.log('Token:',token);

    return <input
        type="hidden"
        name="recaptcha"
        id="recaptcha"
        ref={gettoken}
        value={token}
        {...props.register}
    />;
};

const MailForm = () => {
    const [httpError, setHttpError] = useState(false);
    const [formValid, setformValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const gettoken = useRef();
    
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onChange'
    });

    const path = `sendmail`;
    const IN_PRODUCTION = import.meta.env.MODE === "production";

    let remoteHost;

    if (IN_PRODUCTION) {
        remoteHost = `https://api.tobeworks.de/${path}`;
    } else {
        remoteHost = `https://api.tobeworks.de/${path}`;
    }


    const onSubmit = async (formdata) => {


        // console.log(gettoken);
        // console.log(formdata);

        const postData = {
            name: formdata.name,
            email: formdata.email,
            phone: formdata.phone,
            message: formdata.message,
            token: formdata.recapcha,
            uid:"ksNraqdXHCX5eCc9RfK7FwSGM",
            dc: new Date().toJSON(),
        };

        if (
            postData.firstname !== null &&
            postData.firstname !== null &&
            postData.email !== null
        ) {
            await axios
                .post(remoteHost, postData)
                .then(function (response) {
                    setformValid(true);
                    setHttpError(false);
                    setIsSubmitting(false);
                })
                .catch(function (error) {
                    setformValid(false);
                    setHttpError(true);
                });
        }
        setIsSubmitting(false);
    };


    return (
        <>
        <GoogleReCaptchaProvider reCaptchaKey="6LfIfyYiAAAAAGSwOuD5sWc4a-MuPRmRh-tnvkyB">
        <form
            className=""
                onSubmit={handleSubmit(onSubmit)}
        >
            <ReCaptchaField register={register("recaptcha", {})} />       
            <div className="my-3">
                <label htmlFor="first-name" className="sr-only">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="form-control"
                    placeholder="Name*"
                    {...register("name", {
                        required: "Bitte dieses Feld ausfüllen",
                    })}
                />
                {errors.name?.message && (
                    <InlineAlert msg={errors.name?.message} color="danger" />
                )}
            </div>

            <div className="my-3">
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="form-control"
                    placeholder="Email-Adresse*"
                    {...register("email", {
                        required: "Bitte dieses Feld ausfüllen",
                        pattern: {
                            value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Bitte eine Email-Adresse eingeben",
                        },
                    })}
                />
                {errors.email?.message && <InlineAlert msg={errors.email?.message} />}
            </div>
            <div className="my-3">
                <label htmlFor="phone" className="sr-only">
                    Phone
                </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="form-control"
                    placeholder="Telefonnummer"
                    {...register("phone")}
                />
            </div>
            <div className="my-3">
                <label htmlFor="message" className="sr-only">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                    placeholder="Nachicht*"
                    {...register("message", { required: "Bitte dieses Feld ausfüllen" })}
                ></textarea>
                {errors.message?.message && (
                    <InlineAlert msg={errors.message?.message} />
                )}
            </div>
            <div className="my-3">
                {formValid ? (
                    <InlineAlert
                        msg="Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich zeitnah bei Ihnen melden."
                        color="success"
                    />
                ) : (
                    <button type="submit" className="btn btn-erieblack">Nachricht abschicken</button>
                )}
    
                {httpError && (
                    <InlineAlert
                        msg="Ein schwerer Fehler ist aufgetreten, bitte versuchen Sie es erneut"
                        color="red"
                    />
                )}
            </div>
            </form>
            </GoogleReCaptchaProvider>
            </>
    );
};

export default MailForm;
