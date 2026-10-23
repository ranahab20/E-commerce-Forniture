import Button from "../Button/Button";

const Footer = () => {
  return (
    <>
      <p>Join our newsletter to stay up to date on features and releases.</p>
      <form>
        <input type="text" className="border-2 border-black p-2 mr-2.5" />
        <Button
          variant="outline"
          color="black"
          className="rounded-[24px] p-2.5"
        >
          Subscribe
        </Button>
      </form>
      <p>
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our company.
      </p>
      <div>
        
      </div>
    </>
  );
};

export default Footer;
