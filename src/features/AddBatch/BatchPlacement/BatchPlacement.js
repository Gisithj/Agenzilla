import React, { useEffect, useRef, useState } from "react";
import "./batchPlacement.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import  { store } from "../../../Api/storeApi";
import SuggestComboBox from "../../../components/suggest-combo-box/suggestComboBox";
import FormField from "../../../components/formField/FormField";
import { addBatch, item } from "../../../Api/stocksApi";
import { useAuthState } from "../../../Auth/AuthContext";

function BatchPlacement(props) {
  const [storeData, setStoreData] = useState([]);
  const [beverageData, setBeverageData] = useState([]);
  const [companyName , setCompanyName] = useState("");
  const [beverageName, setBeverageName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [batchItems, setBatchItems] = useState([]);
  const [nextId, setNextId] = useState(1);
  const dataFetchedRef = useRef(false);
  const { user: loggedUser } = useAuthState();

  const handleCompanyName = (storeNameValue) => {
    setCompanyName(storeNameValue);
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
  const handlePrice = (quantityValue) => {
    setPrice(quantityValue);
    // console.log(quantity);
  };

  const handleClick = () => {
    console.log("called");
    if (beverageName !== "" || quantity !== "") {
      var batchItem = {
        id: nextId,
        managerId:loggedUser.managerID,
        itemName: beverageName,
        qty: quantity,
        price:price
      };
      setNextId(nextId + 1);
      setBatchItems([...batchItems, batchItem]);
      console.log(batchItems);
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

  const handleAddBatch = ()=>{
    console.log("called");
    const batch = {
      "companyName":companyName,
      "items":batchItems

    }
    console.log(batch);
    addBatch().create(batch).catch((err)=>console.log(err));
  }

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
                <FormField
                  placeHolder="Company name"
                  handleChange={handleCompanyName}
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
                  <div className="batch-content">
                    <FormField
                      placeHolder="Price"
                      handleChange={handlePrice}
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
              onClick={handleAddBatch}
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
