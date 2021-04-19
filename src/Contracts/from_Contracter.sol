pragma solidity >=0.6.0 <0.9;
// SPDX-License-Identifier: MIT
contract Contractor_to {

    struct Under_contractor {
        
            string Company_name ;
            string occupation ;
            uint256 amount;
            address payable occ_address;
        
        }
     mapping(uint =>  Under_contractor) public Under_Contractor_transactions;
     uint256 sr_num =0;
    function add_details(string memory _cname,string memory _occ,uint256 _amt) public{
        sr_num++;
        Under_Contractor_transactions[sr_num].Company_name =_cname;
        Under_Contractor_transactions[sr_num].occupation=_occ;
        Under_Contractor_transactions[sr_num].amount =_amt;
        Under_Contractor_transactions[sr_num].occ_address = payable (msg.sender);
    }
    function review_details (uint256 _srnumb)
     public view returns(string memory, string memory, uint,address payable) {  
            
        return(Under_Contractor_transactions[_srnumb].Company_name, Under_Contractor_transactions[_srnumb].occupation, 
                Under_Contractor_transactions[_srnumb].amount,Under_Contractor_transactions[_srnumb].occ_address);  
    } 
   
    //  function transf_from_cont() payable external{
    //      Under_Contractor_transactions[sr_num].occ_address.trasfer(2 ether);
         
    //  }
    
     function funds_To_Contractor(address payable _address_topay) payable public{
         _address_topay.transfer(msg.value);
     }
    
}