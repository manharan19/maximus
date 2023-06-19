//start-up

document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".list-item");
    
    listItems.forEach(function(item) {
      var plusIcon = item.querySelector(".plus-icon");
      var itemDetails = item.querySelector(".item-details");
      
      plusIcon.addEventListener("click", function() {
        itemDetails.classList.toggle("show");
      });
    });
  });
  
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get form data
      var formData = new FormData(this);
      
      // Example: Send data via email
      var emailData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };
      sendEmail(emailData);
      
      // Example: Save data in a database
      saveData(formData);
      
      // Clear form inputs after submission
      this.reset();
    });
    
    function sendEmail(data) {
      // Example code for sending email
      // You would need to implement your own email sending logic here
      console.log('Sending email:', data);
    }
    
    function saveData(data) {
      // Example code for saving data in a database
      // You would need to implement your own database integration here
      console.log('Saving data:', data);
    }