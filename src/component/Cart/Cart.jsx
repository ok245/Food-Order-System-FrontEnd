import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import CartItem from"./CartItem"
import AddressCard from "./AddressCard";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
//import * as Yup from "yup"

export const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:"none",
   
    boxShadow: 24,
    p: 4,
  };

  const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
  }

//   const validationSchema=Yup.object.shape({
//      streetAddress:Yup.string().required("Street address is required"),
//      state:Yup.string().required("State is required"),
//      pincode:Yup.required("Pincode is required"),
//      city:Yup.string().required("City is required"),
//   })

const Cart=()=>{
    const createOrderUsingSelectedAddress=()=>{

    }

    const handleSubmit=(values)=>{
        console.log("form values",values);

    }

    const handleOpenAddressModal=()=>setOpen(true);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                 <CartItem/>
                 <Divider/>
                <div className="billDetails px-5 text-sm">
                    <p className="font-extralight py-5">Bill Deatails</p>
                    <div className="space-y-3">
                        <div className="flex justify-between text-gray-400">
                            <p>Item Total</p>
                            <p>₹599</p>

                        </div>

                        <div className=" flex justify-between text-gray-400">
                            <p>Deliver Free</p>
                            <p>₹25</p>

                        </div>

                        <div className=" flex justify-between text-gray-400">
                            <p>GST and Restaurant charges</p>
                            <p>₹25</p>

                        </div>
                        <Divider/>

                    </div>
                    <div className="flex justify-between text-gray-400">
                        <p>Total pay</p>
                        <p>₹2400</p>

                    </div>
                    
                </div>
                </section>
                <Divider orientation="vertical" flexItem/>
                <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">Choose delivery Address</h1>
                        <div className="flex gap-3 flex-wrap justify-center">
                            {[1,1,1,1,1].map((item)=>(
                            <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>))}
                           

                           <Card className="flex gap-5 w-64 p-5">
                            <AddLocationIcon/>
                            <div className="space-y-3 text-gray-500">
                                 <h1 className="font-semibold text-lg text-white">Home</h1>
                               
                                <Button  variant={"outlined"} fullWidth onClick={handleOpenAddressModal}>Add</Button>
                            </div>

                        </Card>
                        </div>

                       
                        
                    </div>

                </section>
                

            </main>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                    onSubmit={handleSubmit}
                    //validationSchema={validationSchema}
                    >
                        
                            <Form>
                        <Grid container  spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                as={TextField}
                                name="streetAddress"
                                label="Street Address"
                                fullWidth
                                variant="outlined"
                                // error={!ErrorMessage("streetAddress")}
                                // helperText={
                                //     <ErrorMessage>
                                //      {(msg)=><span className="text-red-600">{msg}</span>}

                                //     </ErrorMessage>
                                // }

                                />

                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                as={TextField}
                                name="state"
                                label="State"
                                fullWidth
                                variant="outlined"
                                // error={!ErrorMessage("streetAddress")}
                                // helperText={
                                //     <ErrorMessage>
                                //      {(msg)=><span className="text-red-600">{msg}</span>}

                                //     </ErrorMessage>
                                // }

                                />

                            </Grid>
                            
                            <Grid item xs={12}>
                                <Field
                                as={TextField}
                                name="city"
                                label="City"
                                fullWidth
                                variant="outlined"
                                // error={!ErrorMessage("streetAddress")}
                                // helperText={
                                //     <ErrorMessage>
                                //      {(msg)=><span className="text-red-600">{msg}</span>}

                                //     </ErrorMessage>
                                // }

                                />

                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                as={TextField}
                                name="pincode"
                                label="Pincode"
                                fullWidth
                                variant="outlined"
                                // error={!ErrorMessage("streetAddress")}
                                // helperText={
                                //     <ErrorMessage>
                                //      {(msg)=><span className="text-red-600">{msg}</span>}

                                //     </ErrorMessage>
                                // }

                                />

                            </Grid>

                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" type="submit" color="primary">Deliver Here</Button>

                            </Grid>
                       </Grid>
                            </Form>
                           


                        
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}
export default Cart;