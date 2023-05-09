import React, { useEffect, useState } from "react";
import { Table, Popconfirm } from "antd";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ITEMS } from "../utils/queries";
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../utils/mutations";
import ItemFormModal from "./ItemFormModal";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

function ItemList() {
  const { loading, error, data, refetch } = useQuery(GET_ITEMS);
  const [addItemMutation] = useMutation(ADD_ITEM);
  const [updateItemMutation] = useMutation(UPDATE_ITEM);
  const [deleteItemMutation] = useMutation(DELETE_ITEM);
  const [itemAdded, setItemAdded] = useState(false);

  useEffect(() => {
    if (itemAdded) {
      refetch();
      setItemAdded(false);
    }
  }, [itemAdded, refetch]);

  const [listItemsData, setListItemsData] = useState([]);

  useEffect(() => {
    try {
      if (data) {
        setListItemsData(data.items);
      }
    } catch (error) {
      console.error("Error in setting listItemsData", error);
    }
  }, [data]);

  const handleAddItem = async (item) => {
    try {
      await addItemMutation({
        variables: item,
      });
      setItemAdded(true);
    } catch (error) {
      console.error("Error in addItem mutation", error);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      await updateItemMutation({
        variables: updatedItem,
      });
      refetch();
    } catch (error) {
      console.error("Error in updateItem mutation", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    console.log("Deleting item with ID:", itemId);
    try {
      await deleteItemMutation({
        variables: { itemId },
      });
      refetch();
    } catch (error) {
      console.error("Error in deleteItem mutation", error);
    }
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Hotel",
      dataIndex: "hotel",
    },
    {
      title: "Details",
      dataIndex: "details",
    },
    {
      title: "Flight Cost",
      dataIndex: "flights",
    },
    {
      title: "Accomodation Cost",
      dataIndex: "accomodation",
    },
    {
      title: "Food Cost",
      dataIndex: "food",
    },
    {
      title: "Activities",
      dataIndex: "activities",
    },
    {
      title: "Update/Delete",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <div>
            <EditTwoTone
              onClick={() => {
                ItemFormModal({
                  item: record,
                  handleAddItem: handleUpdateItem,
                });
              }}
            />
            <Popconfirm
              title="Are you sure to delete this item?"
              onConfirm={() => handleDeleteItem(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteTwoTone className="mx-3" />
            </Popconfirm>
          </div>
        );
      },
    },
  ]

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;


  return (
    <div>
      <ItemFormModal handleAddItem={handleAddItem} />
      <div className="table-list">
        <div className="table">
          <Table columns={columns} dataSource={listItemsData} rowKey="_id" />
          
        </div>
      </div>
    </div>
  );
}

export default ItemList;
