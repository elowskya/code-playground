$('#contactForm').submit(function(e) {
    var name = document.getElementById('inputName');
    var email = document.getElementById('inputEmail');
    message = document.getElementById('inputMessage');
    
    if (!name.value || !email.value || ! message.value) {
      alertify.error("please check your entries")
     } else {
      $.ajax({
        url:"https://formspree.io/elowskya@mail.gvsu.edu",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
      });
       e.preventDefault()
       $this.get(0).reset()
       alertify.success('Message sent!')
     }
  })