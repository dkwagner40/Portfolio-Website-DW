document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const emailJSUserId = '5D5qyDND_7eD3d2yp';
  const emailJSServiceId = 'service_uz72dc9';
  const emailJSTemplateId = 'template_ugvnwhj';

  emailjs.init(emailJSUserId);

  emailjs.send(emailJSServiceId, emailJSTemplateId, {
    name: name,
    email: email,
    message: message,
  })
  .then(function(response) {
    const responseMessage = document.createElement('p');
    responseMessage.textContent = `Thank you, ${name}! Your message has been submitted.`;
    responseMessage.id = 'responseMessage';

    const formContainer = document.querySelector('.contact-container');
    formContainer.appendChild(responseMessage);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
});
