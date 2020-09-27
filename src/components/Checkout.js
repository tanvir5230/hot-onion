import React from "react";
import { Col } from "reactstrap";

const Checkout = () => {
  return (
    <>
      <Col xs={10} md={5}>
        <div style={{ width: "90%" }} className="m-auto">
          <h4 className="border-bottom pb-2">Edit Delivery Details</h4>
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="*name"
              required
            />
            <input
              type="textarea"
              name="address"
              className="form-control"
              placeholder="*address"
              required
            />
            <input
              type="telephone"
              name="phone"
              placeholder="*phone"
              className="form-control"
              required
            />
            <input
              type="text"
              pattern="[0-9]{5}"
              name="zip"
              className="form-control"
              placeholder="*postal code/zip"
              required
            />

            <input
              type="submit"
              value="save & continue"
              className="form-control text-white"
            />
          </form>
        </div>
      </Col>
      <Col xs={10} md={5} className="mt-5 mt-md-0">
        <div>
          <div className="m-auto" style={{ width: "90%" }}>
            <p>
              From{" "}
              <span className="font-weight-bolder">
                Gulshan Plaza Restaura GPR
              </span>
            </p>
            <p>Arriving in 20-30 min</p>
            <p>107 Rd No. 8</p>
          </div>

          {/* product */}
          <div
            className="d-flex align-items-center rounded px-2 py-3 m-auto"
            style={{ width: "90%", backgroundColor: "#f1f1f1" }}
          >
            <img
              src={require("../resources/Image/cheese-close-up-diet-61180.jpg")}
              className="d-block rounded-circle w-25"
              alt=""
            />
            <div className="w-50 text-center">
              <p className="mb-1">Butter Naan</p>
              <h4 className="text-danger mb-1">$40</h4>
              <p className="text-secondary">Free Delivery</p>
            </div>
            <div className="w-25 py-4">
              <button className="btn p-0 text-danger font-weight-bold">
                -
              </button>
              <span className="bg-white p-2 rounded">02</span>
              <button className="btn p-0 text-success font-weight-bold">
                +
              </button>
            </div>
          </div>
          <div className="p-4">
            <p className="d-flex justify-content-between">
              <span>
                <span>Subtotal</span> <span>-</span> <span>4 item</span>
              </span>
              <span>$320.00</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Tax</span>
              <span>$320.00</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Delivary fee</span>
              <span>$320.00</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Total</span>
              <span>$320.00</span>
            </p>
            <button disabled className="btn btn-danger w-100">
              Place Order
            </button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Checkout;
