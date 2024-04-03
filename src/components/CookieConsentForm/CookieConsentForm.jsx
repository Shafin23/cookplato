import CookieConsent from "react-cookie-consent";

const CookieConsentForm = () => {
  return (
    <>
      <div>
        <CookieConsent
          location="bottom"
          declineButtonText="Decline"
          disableButtonStyles={true}
          buttonText="Accept"
          cookieName="CookieConsent"
          enableDeclineButton={true}
          buttonClasses="bg-[#FAC250] mr-0 md:mr-12 ml-4 md:ml-0 text-xs md:text-base text-white p-2 md:p-3 font-bold rounded-lg"
          declineButtonClasses="bg-[#E72929] mr-0 md:mr-4 ml-3 md:ml-0 text-xs md:text-base text-white p-2 md:p-3 font-bold rounded-lg"
          style={{
            background: "#FFFFFF",
            height: "120px",
            alignItems: "center",
            borderTop: "2px solid #FAC250"
          }}
          expires={150}
        > 
          <div className="flex flex-col ml-0 md:ml-6">
            <span className="font-bold text-lg hidden md:block text-[#1F2937]">We use Cookies</span>
            <span className="text-xs text-[#1F2937] w-full block md:hidden">
              We use cookies and other tracking technologies to improve your
              browsing experience on our website.
            </span>
            <span className="text-sm w-3/4 hidden md:block text-[#1F2937]">
              We use cookies and other tracking technologies to improve your
              browsing experience on our website, to show you personalized
              content and targeted ads, to analyze our website traffic, and to
              understand where our visitors are coming from.
            </span>
          </div>
        </CookieConsent>
      </div>
    </>
  );
};

export default CookieConsentForm;

// const CookieConsentForm = () => {
//   const [consent, setConsent] = useState(false);

//   useEffect(() => {
//     const userConsent = localStorage.getItem("cookieConsent");
//     if (userConsent === "true") {
//       setConsent(true);
//     }
//   }, []);

//   const handleAccept = () => {
//     setConsent(true);
//     localStorage.setItem("cookieConsent", "true");
//     // Set the cookies consent here
//   };

//   const handleDecline = () => {
//     setConsent(false);
//     // Remove or restrict cookies here
//   };

//   if (consent) {
//     return null; // If consent is given, hide the banner
//   }

//   return (
//     <div className="bg-[#2B373B] p-6">
//       <p className="text-white font-bold">This website uses cookies to improve user experience.</p>
//       <div className="flex space-x-2">
//         <button className="bg-white text-[#2b373b] p-3 font-bold rounded-lg" onClick={handleAccept}>Accept</button>
//         <button className="bg-white text-[#2b373b] p-3 font-bold rounded-lg" onClick={handleDecline}>Decline 1</button>
//       </div>
//     </div>
//   );
// };

// export default CookieConsentForm;
