import FormContainer from "../Form/FormComponents/FormContainer";
import FormHeader from "../Form/FormComponents/FormHeader";
import FormBody from "../Form/FormComponents/FormBody";
import Switch from "../Form/FormComponents/Switch";
import FormFooter from "../Form/FormComponents/FormFooter";
import ExternalLogins from "../Form/FormComponents/ExternalLogins";

const AuthLayout = (WrappedComponent: any) => {
  const NewComponent = () => {
    return (
      <FormContainer>
        <FormHeader
          title="Create Your Account"
          subtitle="Setting up an account takes less than 1 minute"
        />
        <FormBody>
          <Switch />
          <WrappedComponent />

          <FormFooter>
            <ExternalLogins />
          </FormFooter>
        </FormBody>
      </FormContainer>
    );
  };
  return NewComponent;
};

export default AuthLayout;
