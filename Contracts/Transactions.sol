pragma solidity >=0.6.0 <0.9;
// SPDX-License-Identifier: MIT
    contract Transactions
    {

        struct Contractor {
            uint  id;
            string Company_name ;
            uint256 bid;
            address payable contractor_address;

        }
        mapping(address => Contractor) public Transactions_history;
        uint cnt =0;
        function add_Tender(uint _id, string memory _name,uint256 _bid) public
        {
            cnt++;
            address payable _addr = payable (msg.sender);
            Transactions_history[_addr].id=_id;
            Transactions_history[_addr].Company_name=_name;
            Transactions_history[_addr].bid=_bid;
            Transactions_history[_addr].contractor_address=_addr;
            cont_addr = payable (msg.sender);

        }
        address payable cont_addr;
        function review_details (address payable _addres)
        public view returns(uint _id, string memory _name,uint256 _bid,address payable) {  
           
        return(Transactions_history[_addres].id, Transactions_history[_addres].Company_name,
                Transactions_history[_addres].bid,Transactions_history[_addres].contractor_address);  
    }
        function return_address()  public view returns(address payable  ){
            return Transactions_history[cont_addr].contractor_address;
        }

        uint  bid_value;
        address payable public state_address;

        // function contractor_select() public
        // {

        // }
        event funds_To_CGG(address indexed _from, uint _value);
        function request_Funds_to_CG(address payable _addr,uint _bid_value) payable public
        {
            bid_value = _bid_value;
            state_address = _addr;
            emit funds_To_CGG(state_address, msg.value);

        }
         event funds_To_SGG(address indexed _from, uint _value);
        function funds_To_SG(address payable _addr) payable external
        {
            _addr.transfer(msg.value);
            emit funds_To_SGG(msg.sender, msg.value);
        }


        uint part_amount;

        event funds_To_Contractorr(address indexed _from,address indexed _to, uint _value); //event
        function funds_To_Contractor(address payable _add,uint _part_amount) payable external
        {
            part_amount = _part_amount;
            
           // address payable contractor_address_topay = return_address() ;
            _add.transfer(msg.value);
            emit funds_To_Contractorr(msg.sender,_add, msg.value);

        }
event Vendors_under_Contractor(string _Under_contractor,string vendor_comp,string field,uint256 value,address payable vendor_addr);
    struct Under_contractor {
       
            string Company_name ;
            string occupation ;
            uint256 amount;
            address payable occ_address;
       
        }
     mapping(string =>  Under_contractor) Under_Contractor_transactions;
     string public _Under_contractor;
     function set_contr_4Vend(string memory __Under_contractor)  public{
         _Under_contractor = __Under_contractor;
     }
     
    function add_details(string memory _cname,string memory _occ,uint256 _amt) public{
       
        Under_Contractor_transactions[_Under_contractor].Company_name =_cname;
        Under_Contractor_transactions[_Under_contractor].occupation=_occ;
        Under_Contractor_transactions[_Under_contractor].amount =_amt;
        Under_Contractor_transactions[_Under_contractor].occ_address = payable (msg.sender);
        emit Vendors_under_Contractor(_Under_contractor,_cname,_occ,_amt,payable (msg.sender));
    }
   
    function review_details (string memory _contr)
     public view returns(string memory, string memory, uint,address payable) {  
           
        return(Under_Contractor_transactions[_contr].Company_name, Under_Contractor_transactions[_contr].occupation,
                Under_Contractor_transactions[_contr].amount,Under_Contractor_transactions[_contr].occ_address);  
    }
   
    //  function transf_from_cont() payable external{
    //      Under_Contractor_transactions[sr_num].occ_address.trasfer(2 ether);
         
    //  }
    event from_contractor(address payable _from,address payable to,uint val);
     function payment_from_Contractor(address payable _address_topay) payable public{
         _address_topay.transfer(msg.value);
         emit from_contractor( payable(msg.sender),_address_topay,msg.value);
     }
   
       
    }