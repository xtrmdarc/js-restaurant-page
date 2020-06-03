import Img from './meat-burguer-hero.jpg';

const renderContact = () => {
  const mainContent = document.querySelector('#main-section');
  mainContent.className = '';
  mainContent.classList.add('main-section');
  mainContent.classList.add('contact-page');

  const contact = document.querySelector('#main-info');
  contact.className = '';
  contact.classList.add('contact');
  contact.innerHTML = '';

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('img-wrapper');
  contact.appendChild(imgWrapper);

  const img = document.createElement('img');
  img.src = Img;
  imgWrapper.appendChild(img);

  const mainContact = document.createElement('div');
  mainContact.classList.add('main-contact');
  mainContact.innerHTML = `<h1>Contact us</h1>
  <p>
    It is our goal to delight you every time you dine with us. If 
    you had a good experience, we want to hear about it! If you were 
    disappointed, we want to hear about that, too! Your feedback is 
    important to us and helps us understand how to better serve you 
    in the future. 
    <br> <br>
    If you have questions, we invite you to check out our FAQ, as 
    we may have already answered them. If not, please fill out the 
    form below. We look forward to hearing from you!
  </p>
  <form action="#">
    <textarea name="contact_message" id="contact_message" cols="30" rows="10"></textarea>
    <button>SUBMIT</button>
  </form>`;

  contact.appendChild(mainContact);
};

export default renderContact;
