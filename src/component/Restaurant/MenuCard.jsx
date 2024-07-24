import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category } from "@mui/icons-material";

const demo=[
    {
       Category:"Nuts & seeds",
       ingredients:["Cashews"]
    },
    {
        Category:"Protein",
        ingredients:["Ground beef","Bacon strips"]
     },
     
];

const MenuCard=()=>{

    const handleCheckBoxChange=(value)=>{
        console.log("value");

    }
    return(
       <div><Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1-content"
         id="panel1-header"
       >
         <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
                <img className="w-[7rem] h-[7rem] object-cover" src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl pl-5">
                <p className="font-semibold text-xl">Burger</p>
                <p>₹499</p>
                <p className="text-gray-400">nice food</p>

            </div>

         </div>
       </AccordionSummary>
       <AccordionDetails>
         <form>
            <div className="flex gap-5 flex-wrap">
                {
                    demo.map((item)=><div>
                        <p>{item.Category}</p>
                        <FormGroup>
                          {item.ingredients.map((item)=><FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item} />)} 
                            
                        </FormGroup>
                    </div>)
                    
                }

            </div>
            <div className="pt-5">
                <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out Of Stock"}</Button>
            </div>
         </form>
       </AccordionDetails>
     </Accordion></div>
    );
}
export default MenuCard;