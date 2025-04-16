const cardData = [
  {
    title: "🔍 View All Portfolios in One Place",
    desc: "No more revisiting the same pages—instantly see multiple elite investors’ portfolios together, saving time and avoiding manual stock checks.",
  } ,
  {
    title: "📈 Boosts Investment Decision-Making",
    desc: "By revealing stocks commonly held by successful investors, the extension helps you increase the probability of making winning picks.",
  },
  {
    title: "🧠 Saves Time & Mental Effort",
    desc: "Automates tedious comparison work, saving you hours of effort and mental load when analyzing large portfolios.",
  },
  {
    title: "✅ Compare Thousands of Stocks in a Blink",
    desc: "Effortlessly compare thousands of stocks across multiple superstar investor portfolios — the extension delivers precise, instant results with zero human error, helping you analyze with confidence and speed.",
  },
  {
    title: "💾 Export as CSV or XLSX",
    desc: "Download the matched stock data directly in CSV or XLSX format, or copy and paste anywhere you need — perfect for reporting and analysis.",
  },
  {
    title: "👨‍💼 Easy to Use for All Investors",
    desc: "Designed with a clean, intuitive interface — whether you're a beginner or an experienced investor, it’s easy to get insights fast.",
  },
];
const cardContainer = document.querySelector('#features > div:nth-child(2)');
cardData.forEach(card => {
  cardContainer.insertAdjacentHTML('beforeend', `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
        <div class="flip-card-back">
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
      </div>
    </div>
  `);
});
const stepsData=[
  {title:"Install the Extension",
    desc:`Search for the Common Stock Finder extension in the Chrome Web Store, and install it to simplify your investing research by identifying common stock picks across top investors’ portfolios.`
  },
  {title:"Open an Investor's Portfolio Page",
    desc:`Visit any trusted investment website displaying elite investors’ stock portfolios.Then Visit a superstar investor’s portfolio page of your choice.`
  },
  {title:"Activate the Extension",
    desc:`Click on the extension icon in your browser toolbar. In the popup, click the "Scrape" button to extract the stock data from the current portfolio.`
  },
  {title:"Repeat for More Portfolios",
    desc:`Navigate to another investor's portfolio page and click "Scrape" again. With each scrape, the extension compares and displays common stock picks across all collected portfolios.`
  },
  {title:"Export or Copy the Results",
    desc:`Download the list of common stocks as a CSV or XLSX file, or simply copy the data to your clipboard for integration into your own research.`
  },
]
const leftContainer = document.querySelector(".left");
const reference = leftContainer.querySelectorAll("h2")[1]; // second <h2>
stepsData.reverse().forEach((item,i) => {
  const stepHTML = `
    <div class="steps">
      <div>
        <span>${item.title}</span>
        <span> ............ </span>
        <span>${stepsData.length-(i)}</span>
      </div>
      <p>${item.desc}</p>
    </div>
  `;
  reference.insertAdjacentHTML("afterend", stepHTML);
});
const faq=[
  {question:"📌 Can I expect additional features in the future?",
    answer:`Yes — you can expect powerful features soon! 🚀
    This tool aims to help value-driven investors make informed decisions.`
  },
  {question:"📌 Why are only a few websites recommended right now?",
    answer:`Some platforms limit access with paywalls, scraping restrictions, or partial data. That’s why I’ve started with trusted sites like Trendlyne US, Trade Brains, and Univest. More websites will be added soon — feel free to suggest yours via the Contact Form!`
  },
  {question:"📌 Where is the scraped data stored?",
    answer:`All data is saved locally.
No third-party API or server is involved — your data stays private and secure.`
  },
  {question:"❓ Why doesn’t the extension always scrape all stocks from the Univest website?",
    answer:`Univest uses pagination to split portfolios across pages.
The extension only works if you start scraping from page 1 of the table.
✅ Scraping from the middle or end won’t trigger the process.`
  },
  {
    question:'📌 What websites is this extension best suited for?',
    answer:`Works best with: 
  <a style="text-decoration:none" href="https://trendlyne.com/us/portfolio/superstar-shareholders/index/" target="_blank" rel="noopener noreferrer"><strong>Trendlyne US</strong></a> (Superstar Portfolios),
    <a style="text-decoration:none" href="https://hedgefollow.com/" target="_blank" rel="noopener noreferrer"><strong>HedgeFollow</strong></a> (Top Searched Hedge Funds),
  <a style="text-decoration:none" href="https://trendlyne.com/portfolio/superstar-shareholders/index/" target="_blank" rel="noopener noreferrer"><strong>Trendlyne INDIA</strong></a> (Superstar Portfolios),
  <a style="text-decoration:none" href="https://portal.tradebrains.in/superstars" target="_blank" rel="noopener noreferrer"><strong>Trade Brains</strong></a> (Superstar Portfolio),
  and 
  <a style="text-decoration:none" href="https://univest.in/shark-portfolios" target="_blank" rel="noopener noreferrer"><strong>Univest</strong></a> (Shark portfolios).<br>
  Trendlyne India is popular, but prices are missing.<br>
  ⚡ More sites coming soon — 📩 Suggest yours via the contact form!`
  },
  {question:"📌 Does this extension work on mobile?",
    answer:"No, Chrome extensions are not supported on mobile devices."
  },
  {question:"📌 How often is the data updated?",
    answer:"The extension fetches live data every time you scrape."
  },
  {question:"📌 Can I export the scraped data?",
    answer:"Yes, you can download the data as a CSV or XLSX file, or use the 'Copy All' option to paste it directly from your clipboard."
  },
]
const faqContainer=document.querySelector("#faq>.faq-container>h1")
faq.forEach(el=>{
  faqContainer.insertAdjacentHTML('afterend',`<div class="faq-item">
          <button class="faq-question">
            ${el.question}
            <span class="arrow">&#9660;</span>
          </button>
          <div class="faq-answer">
            <p>
              ${el.answer}
            </p>
          </div>
        </div>`)
})
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
});

// Select all question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question button
faqQuestions.forEach(question => {
    // Add a click event listener to each question
    question.addEventListener('click', () => {
        // Close any other open answers except the one clicked
        faqQuestions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active'); // Remove 'active' class to reset arrow rotation
                item.nextElementSibling.style.maxHeight = null; // Collapse the answer
            }
        });

        // Toggle 'active' class on the clicked question to rotate the arrow
        question.classList.toggle('active');

        // Select the corresponding answer div
        const answer = question.nextElementSibling;

        // Check if the answer is already open
        if (answer.style.maxHeight) {
            // If open, close it by resetting max-height
            answer.style.maxHeight = null;
        } else {
            // If closed, set max-height to scrollHeight to expand it
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
 const form=document.querySelector('form')
 const input_email=document.getElementById("input-email")
 let email=''
 input_email.addEventListener('change',(e)=>{
  console.log(e.target.value)
  email=e.target.value
 })
 const input_subject=document.getElementById('input-subject')
 let subject=''
 input_subject.addEventListener('change',(e)=>{
  console.log(e.target.value,'is subject')
  subject=e.target.value
 })
 const input_message=document.getElementById('input-message')
 let message=''
 input_message.addEventListener('change',(e)=>{
  console.log(e.target.value)
  message=e.target.value
 })
 form.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log({email,subject,message})
  const obj={
    senderMail:email,
    text:message,
    subject
  }
  sendMail(obj)
  form.reset();
 })
 function sendMail(obj){
  fetch(`https://extension-backend-email.onrender.com/sendMail`,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(obj)
  }).then(res=>{return res.json()})
  .then(data=>console.log(data))
  .catch(err=>console.log(err.message))
  input_email.textContent=""
 }