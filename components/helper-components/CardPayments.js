import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useContext, useState } from "react";
import { Store } from "../../utiles/Store";
import Cookies from "js-cookie";

const CardPayment = () => {
  const { paymentMethod, setPaymentMethod } = useState("");
  const { state, dispatch } = useContext(Store);

const saveButton = ()=>{
  console.log('add')
  dispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethod });
    Cookies.set("paymentMethod", paymentMethod);
  
}
  
  return (
    <>
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">
      Payment Methode
    </FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
      value={paymentMethod}
      onChange={(e) => setPaymentMethod(e.target.value)}
    >
      <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
      <FormControlLabel value="Fawry" control={<Radio />} label="Fawry" />
      <FormControlLabel value="Visa" control={<Radio />} label="Visa" />
    </RadioGroup>
  </FormControl>
  <button onClick={e=> saveButton()}>save</button>
    </>
      
  );
};

export default CardPayment;
