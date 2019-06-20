function AddressBook(){
	this.contact = []
}
AddressBook.prototype.addContact = function(contact){
	this.contact.push(contact);
}

function contact(first_name, second_name, phone_number, email, address){
this.first_name= first_name;
this.second_name = second_name;
this.phone_number = phone_number;
this.email = email;
this.address = ["street","city","country"];
}


contact.prototype.fullname = function() {return this.first_name + " " + this.second_name;
};


var AddressBook = new AddressBook();
var contact = new contact("Seruwooza", "Augustine","0704985004", "aseruwooza@gmail.com");
AddressBook.addContact(contact);

