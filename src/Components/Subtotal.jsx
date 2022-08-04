import "../Styles/Subtotal.css";
import NumberFormat from "react-number-format";
import { SportsBasketball } from "@mui/icons-material";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>{` ${value} `}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
