pragma solidity >=0.6.0 <0.9;
// SPDX-License-Identifier: MIT
    contract Tender 
    {
        
         
        struct Contractor {
            uint  id;
            string Company_name ;
            uint256 bid;
            address payable contractor_address;
        
        }
        mapping(uint => Contractor) public Transactions_history;
        uint cnt =0;
        function add_Tender(uint _id, string memory _name,uint256 _bid) public
        {
            cnt++;
            address payable _addr = payable (msg.sender);
            Transactions_history[cnt].id=_id;
            Transactions_history[cnt].Company_name=_name;
            Transactions_history[cnt].bid=_bid;
            Transactions_history[cnt].contractor_address=_addr;
        
             
        }
        function return_address()  public view returns(address payable  ){
            return Transactions_history[cnt].contractor_address;
        }
        
        uint  bid_value;
        address payable state_address;
        
        // function contractor_select() public
        // {
            
        // }
        
        function request_Funds_to_CG(uint _bid_value, address payable _state_address) payable public
        {
            bid_value = _bid_value;
            state_address = _state_address;
            
        }
        function funds_To_SG() payable external
        {
            state_address.transfer(msg.value);
        }
        
    
        uint part_amount;

         
        function funds_To_Contractor(address payable _contractor_address_topay,uint _part_amount) payable external
        {
            part_amount = _part_amount;
            address payable contractor_address_topay = _contractor_address_topay;
            contractor_address_topay.transfer(msg.value);
            
        }
        
        
        
    }