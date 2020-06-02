import Img from './meat-burguer-hero.jpg';

const renderContact = () => {
  const content = document.querySelector('#content');

  const main_content = document.querySelector('#main-section');
  main_content.className = '';
  main_content.classList.add('main-section');
  main_content.classList.add('contact-page');

  const contact = document.querySelector('#main-info');
  contact.className = '';
  contact.classList.add('contact');
  contact.innerHTML = '';
  
  const img_wrapper = document.createElement('div');
  img_wrapper.classList.add('img-wrapper');
  contact.appendChild(img_wrapper);

  const img = document.createElement('img');
  img.src = Img;
  img_wrapper.appendChild(img);

  const main_contact = document.createElement('div');
  main_contact.classList.add('main-contact');
  main_contact.innerHTML = `<h1>Contact us</h1>
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
  contact.appendChild(main_contact);
  
}

export default renderContact;