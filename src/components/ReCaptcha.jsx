import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';


const CaptchaButton = ({ onVerifyCaptcha }) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const clickHandler = async () => {
        if (!executeRecaptcha) {
            return;
        }

        const token = await executeRecaptcha('contact');

        onVerifyCaptcha(token);
    };

    return (
        <button onClick={clickHandler}>
            Please validate you are a human.
        </button>
    );
};

export const ReCaptcha = ({ onVerifyCaptcha }) => (
    <GoogleReCaptchaProvider
        reCaptchaKey="6LfIfyYiAAAAAGSwOuD5sWc4a-MuPRmRh-tnvkyB"
    >
        <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
    </GoogleReCaptchaProvider>
);