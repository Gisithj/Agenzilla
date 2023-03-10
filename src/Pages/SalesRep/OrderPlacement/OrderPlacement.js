import React, { useEffect, useRef, useState } from "react";
import "./orderPlacement.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import  { store } from "../../../Api/storeApi";
import SuggestComboBox from "../../../components/suggest-combo-box/suggestComboBox";
import FormField from "../../../components/formField/FormField";
import { item } from "../../../Api/stocksApi";
import { orderPlacement } from "../../../Api/ordersApi";
import { useAuthState } from "../../../Auth/AuthContext";

function OrderPlacement(props) {
  const [storeData, setStoreData] = useState([]);
  const [beverageData, setBeverageData] = useState([]);
  const [storeName, setStoreName] = useState("");
  const [beverageName, setBeverageName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const [nextId, setNextId] = useState(1);
  const dataFetchedRef = useRef(false);
  const { user: loggedUser } = useAuthState();
  const salesID = loggedUser.salesRepID;

  const handleStoreName = (storeNameValue) => {
    setStoreName(storeNameValue);
    //console.log(storeName);
  };
  const handleBeverageName = (beverageNameValue) => {
    setBeverageName(beverageNameValue);
    //console.log(beverageName);
  };
  const handleQuantity = (quantityValue) => {
    setQuantity(quantityValue);
    // console.log(quantity);
  };

  const handleClick = () => {
    //console.log(beverageName);
    //console.log(storeName);
    if (beverageName !== "" || quantity !== "") {
      var orderItem = {
        id: nextId,
        itemName: beverageName,
        qty: quantity,
      };
      setNextId(nextId + 1);
      setOrderItems([...orderItems, orderItem]);
    }
    //console.log(orderItems);
  };

  const handleDeleteOrderItem = (id) => {
    console.log("delete called");
    setOrderItems(orderItems.filter((a) => a.id !== id));
  };

  const storeDataHandle = async (data) => {
    data.map((store) => {
      return setStoreData((storeData) => [...storeData, store.name]);
    });
  };
  const handleBeverageList = async (data) => {
    data.map((beverage) => {
      return setBeverageData((beverageData) => [...beverageData, beverage.name]);
    });
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

      store()
      .fetchAll()
      .then((response) => {
        storeDataHandle(response.data);
      })
      .catch((err) => console.log(err));

      item().fetchAll().then((response)=>{
        handleBeverageList(response.data)
      }).catch((err) => console.log(err));

  }, []);

  const handleOrderPlacement = ()=>{
    const order = {
      "storeName":storeName,
      "salesRepID":salesID,
      "itemQuantities":orderItems

    }
    orderPlacement().create(order).catch((err)=>console.log(err));
  }

  if (!storeData) {
    return;
  }

  return (
    <div className="orders-placement-container">
      <div className="order-placement-header">
        <h1>Place Order</h1>
      </div>
      <div className="orderForm_Table_Container">
        <div>
          <form action="">
            <div className="order-placement">
              <div className="order-content">
                <SuggestComboBox
                  name="Store name"
                  handleChange={handleStoreName}
                  storeList={storeData}
                />
              </div>
              <div className="order-details">
                <div className="oder-details-head">
                  <div className="order-content">
                    <SuggestComboBox
                      name="Beverage name"
                      handleChange={handleBeverageName}
                      storeList={beverageData}
                    />
                  </div>
                  <div className="order-content">
                    <FormField
                      placeHolder="Quantity"
                      handleChange={handleQuantity}
                    />
                  </div>
                </div>
                <div>
                  <IconButton onClick={handleClick} color={"#ffaf3f"}>
                    <AddCircleIcon className="btn-add" fontSize="large" />
                  </IconButton>
                </div>
              </div>
            </div>
          </form>
          <div className="orderPlacementBtn">
            <Button
              sx={[
                {
                  backgroundColor: "#FFAF36",
                  width: "15em",
                  height: "3em",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                },
              ]}
              variant="contained"
              onClick={handleOrderPlacement}
            >
              Place Order
            </Button>
          </div>
        </div>
        <div className="orders-placement-table-container">
          <table className="orders-placement-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Beverage name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => {
                return [
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.itemName}</td>
                    <td className="lastColumnWithDeleteIcon">
                      <div>{item.qty}</div>
                      <div>
                        <IconButton
                          variant="outlined"
                          onClick={() => handleDeleteOrderItem(item.id)}
                        >
                          <DeleteIcon className="deleteOrderListItem" />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                ];
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderPlacement;
