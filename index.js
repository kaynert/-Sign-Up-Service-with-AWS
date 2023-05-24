const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataObj = Object.fromEntries(formData.entries());

  fetch('your-api-key', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formDataObj),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Handle the response as needed

    //alert message to check email
    alert("Check your email for more information!")

    // refesh page after submitting

  setTimeout(function(){
    location.reload()
    },1000);
    
  })
  .catch(error => {
    console.error(error);
  });

});
