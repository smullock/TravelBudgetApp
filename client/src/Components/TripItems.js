// import {Form,Input,InputNumber,DatePicker,Modal,message,Button,Table,Popconfirm,} from "antd";
// import { useState, useEffect } from "react";
// import { useMutation, useQuery } from "@apollo/client";
// import { GET_ITEMS } from "../utils/queries";
// import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../utils/mutations";
// import moment from "moment";
// import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";


// const ItemListAndForm = () => {
//   const { loading, error, data, refetch } = useQuery(GET_ITEMS);
//   const [addItemMutation] = useMutation(ADD_ITEM);
//   const [updateItemMutation] = useMutation(UPDATE_ITEM);
//   const [deleteItemMutation] = useMutation(DELETE_ITEM);
//   const [itemAdded, setItemAdded] = useState(false);
//   const [listItemsData, setListItemsData] = useState([]);

//   useEffect(() => {
//     if (itemAdded) {
//       refetch();
//       setItemAdded(false);
//     }
//   }, [itemAdded, refetch]);



//   useEffect(() => {
//     try {
//       if (data) {
//         setListItemsData(data.items);
//       }
//     } catch (error) {
//       console.error("Error in setting listItemsData", error);
//     }
//   }, [data]);

//   const handleAddItem = async (item) => {
//     try {
//       await addItemMutation({
//         variables: item,
//       });
//       setItemAdded(true);
//     } catch (error) {
//       console.error("Error in addItem mutation", error);
//     }
//   };
//   const handleUpdateItem = async (updatedItem) => {
//     try {
//       await updateItemMutation({
//         variables: updatedItem,
//       });
//       refetch();
//     } catch (error) {
//       console.error("Error in updateItem mutation", error);
//     }
//   };

//   const handleDeleteItem = async (itemId) => {
//     console.log("Deleting item with ID:", itemId);
//     try {
//       await deleteItemMutation({
//         variables: { itemId },
//       });
//       refetch();
//     } catch (error) {
//       console.error("Error in deleteItem mutation", error);
//     }
//   };

//   const showModal = () => {
//     setVisible(true);
//   };

//   const [form] = Form.useForm();
//   const [visible, setVisible] = useState(false);
//   const [addItem, { loading: addLoading }] = useMutation(ADD_ITEM);

//   const handleOk = async () => {
//     try {
//       const values = await form.validateFields();
//       console.log("Values before input:", values);

//       // const{date} = values;
//       // const dateString = moment(date).format('YYYY-MM-DD');

//       const item = {
//         date: values.date,
//         city: values.city,
//         hotel: values.hotel,
//         details: values.details,
//         flights: values.flights,
//         accomodation: values.accomodation,
//         food: values.food,
//         activities: values.activities,
//       };

//       await addItem({
//         variables: item});

//       console.log("Values after input:", item);

//       message.success("Item added successfully!");
//       setVisible(false);
//       form.resetFields();
//       setItemAdded(true);
//     } catch (error) {
//       console.error("Error in addItem mutation", error);
//       message.error("Failed to add item. Please try again later.");
//     }
//   };

//   const handleCancel = () => {
//     setVisible(false);
//     form.resetFields();
//   };

//   const columns = [
//     {
//       title: "Date",
//       dataIndex: "date",
      
//       render: (date) => moment(date).locale('en-au').format("MMMM Do YYYY"),
//     },
//     {
//       title: "City",
//       dataIndex: "city",
     
//     },
//     {
//       title: "Hotel",
//       dataIndex: "hotel",
      
//     },
//     {
//       title: "Details",
//       dataIndex: "details",
      
//     },
//     {
//       title: "Flights",
//       dataIndex: "flights",
      
//     },
//     {
//       title: "Accomodation",
//       dataIndex: "accomodation",
      
//     },
//     {
//       title: "Food",
//       dataIndex: "food",
      
//     },
//     {
//       title: "Activities",
//       dataIndex: "activities",
      
//     },
//     {
//       title: "Action",
//       dataIndex: "id",
      
//       render: (id, record) => (
//         <span>
//           <Button
//             type="primary"
//             style={{ marginRight: 16 }}
//             onClick={() => {
//               form.setFieldsValue(record);
//               setVisible(true);
//               handleUpdateItem(id)
//             }}
//           >
//             <EditTwoTone />
//             Edit
//           </Button>
//           <Popconfirm
//             title="Are you sure to delete this item?"
//             onConfirm={() => handleDeleteItem(record._id)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button type="primary" danger>
//               <DeleteTwoTone />
//               Delete
//             </Button>
//           </Popconfirm>
//         </span>
//       ),
//     },
//   ];

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Add New Item
//       </Button>
//       <Modal
//         open={visible}
//         title="Add New Item"
//         onOk={handleOk}
//         confirmLoading={addLoading}
//         onCancel={handleCancel}
//       >
//         <Form form={form} layout="vertical">
//           <Form.Item
//             name="date"
//             label="Date"
//             rules={[{ required: true, message: "Please select a date" }]}
//           >
//             <DatePicker />
//           </Form.Item>
//           <Form.Item
//             name="city"
//             label="City"
//             rules={[{ required: true, message: "Please enter the city name" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="hotel"
//             label="Hotel"
//             rules={[{ required: true, message: "Please enter the hotel name" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="details"
//             label="Details"
//             rules={[{ required: true, message: "Please enter some details" }]}
//           >
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item
//             name="flights"
//             label="Flights"
//             rules={[{ required: true, message: "Please enter flight details" }]}
//           >
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item
//             name="accomodation"
//             label="Accomodation"
//             rules={[
//               { required: true, message: "Please enter accommodation details" },
//             ]}
//           >
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item
//             name="food"
//             label="Food"
//             rules={[{ required: true, message: "Please enter food details" }]}
//           >
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item
//             name="activities"
//             label="Activities"
//             rules={[
//               { required: true, message: "Please enter activity details" },
//             ]}
//           >
//             <Input.TextArea />
//           </Form.Item>
//         </Form>
//       </Modal>
//       <Table
//         dataSource={listItemsData}
//         columns={columns}
//         rowKey="_id"
//         loading={loading}
//         pagination={{ pageSize: 10 }}
//       />
//     </>
//   );
// };

// export default ItemListAndForm;
