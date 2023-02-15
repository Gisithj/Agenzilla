import React, { useEffect, useRef, useState } from "react";
import "./batchPlacement.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import storeApi, { store } from "../../../Api/storeApi";
import SuggestComboBox from "../../../components/suggest-combo-box/suggestComboBox";
import FormField from "../../../components/formField/FormField";
import { item } from "../../../Api/stocksApi";

function BatchPlacement(props) {
  const [storeData, setStoreData] = useState([]);
  const [beverageData, setBeverageData] = useState([]);
  const [storeName, setStoreName] = useState("");
  const [beverageName, setBeverageName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [batchItems, setBatchItems] = useState([]);
  const [nextId, setNextId] = useState(1);
  const dataFetchedRef = useRef(false);

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
      var batchItem = {
        id: nextId,
        beverageName: beverageName,
        quantity: quantity,
      };
      setNextId(nextId + 1);
      setBatchItems([...batchItems, batchItem]);
    }
    //console.log(orderItems);
  };

  const handleDeleteBatchItem = (id) => {
    console.log("delete called");
    setBatchItems(batchItems.filter((a) => a.id !== id));
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

  if (!storeData) {
    return;
  }

  return (
    <div className="batch-placement-container">
      <div className="batch-placement-header">
        <h1>Place Batch</h1>
      </div>
      <div className="batchForm_Table_Container">
        <div>
          <form action="">
            <div className="batch-placement">
              <div className="batch-content">
                <SuggestComboBox
                  name="Company name"
                  handleChange={handleStoreName}
                  storeList={storeData}
                />
              </div>
              <div className="batch-content">
              <FormField
                      placeHolder="BatchID"
                      handleChange={handleQuantity}
                    />
              </div>
              <div className="batch-details">
                <div className="batch-details-head">
                  <div className="batch-content">
                    <SuggestComboBox
                      name="Beverage name"
                      handleChange={handleBeverageName}
                      storeList={beverageData}
                    />
                  </div>
                  <div className="batch-content">
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
          <div className="batchPlacementBtn">
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
            >
              Place Order
            </Button>
          </div>
        </div>
        <div className="batch-placement-table-container">
          <table className="batch-placement-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Beverage name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {batchItems.map((item) => {
                return [
                  <tr key={item.id}>
                    <td>{item.beverageName}</td>
                    <td>{item.beverageName}</td>
                    <td className="lastColumnWithDeleteIcon">
                      <div>{item.quantity}</div>
                      <div>
                        <IconButton
                          variant="outlined"
                          onClick={() => handleDeleteBatchItem(item.id)}
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

export default BatchPlacement;
