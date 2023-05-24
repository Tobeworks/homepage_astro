import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";

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


    const handleReCaptchaVerify = useCallback(async () => {

        if (!executeRecaptcha) {
            //console.log('Execute recaptcha not yet available');
            return;
        }

        await executeRecaptcha('tobeworks').then((res) => {
            setToken(res);
        });

    }, [executeRecaptcha]);

    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    return <input
        type="hidden"
        name="recaptcha"
        id="recaptcha"
        className=""
        value={token}
        {...props.register}
    />;
};

const MailForm = () => {
    const [httpError, setHttpError] = useState(false);
    const [formValid, setformValid] = useState(false);
    const [forminSubmit, setForminSubmit] = useState(false);


    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onSubmit'
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

        setForminSubmit(true);
        //fuck you react!
        formdata.recapcha = document.getElementById('recaptcha').value;

        const postData = {
            name: formdata.name,
            email: formdata.email,
            phone: formdata.phone,
            message: formdata.message,
            token: formdata.recapcha,
            uid: "ksNraqdXHCX5eCc9RfK7FwSGM",
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
                    setForminSubmit(false);
                })
                .catch(function (error) {
                    setformValid(false);
                    setHttpError(true);
                    setForminSubmit(false);
                });
        }

    };


    return (
        <>
            <GoogleReCaptchaProvider reCaptchaKey="6LfIfyYiAAAAAGSwOuD5sWc4a-MuPRmRh-tnvkyB">

                <form
                    className=""
                    onSubmit={handleSubmit(onSubmit)}>

                    <ReCaptchaField register={register("recaptcha", { readOnly: true })} />
                    <div className="my-3">
                        <label htmlFor="name" className="sr-only">
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
                        ></input>
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
                        ></input>
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
                            className="form-control"
                            placeholder="Telefonnummer"
                            {...register("phone")}
                        ></input>
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
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="datenschutz"
                            {...register("datenschutz", { required: "Bitte akzpetieren Sie den Datenschutz" })}
                        ></input>
                        <label className="form-check-label" htmlFor="datenschutz">
                            Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen
                        </label>
                        {errors.datenschutz?.message && (
                            <InlineAlert msg={errors.datenschutz?.message} />
                        )}
                    </div>

                    <div className="my-3">


                        {formValid ? (
                            <InlineAlert
                                msg="Nachricht wurde erfolgreich gesendet. Ich werde mich zeitnah bei Dir melden. Bis bald!"
                                color="success"
                            />
                        ) : (
                            <button type="submit" className="btn btn-erieblack">
                                {forminSubmit ?
                                    (<div className="spinner-border spinner-border-sm text-primary mr-3" role="status">
                                        <span className="visually-hidden"></span>
                                    </div>) : ''
                                } Nachricht abschicken</button>
                        )}

                        {httpError && (
                            <InlineAlert
                                msg="Ein schwerer Fehler ist aufgetreten, bitte versuchen Sie es erneut oder landen Sie die Seite neu."
                                color="danger"
                            />
                        )}
                    </div>
                </form>
            </GoogleReCaptchaProvider>
        </>
    );
};

export default MailForm;
