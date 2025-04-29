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
const websites = [
  {
    name: "Trendlyne US",
    url: "https://trendlyne.com/us/portfolio/superstar-shareholders/index/",
    investorType: "Superstar Investors",
    region: "US"
  },
  {
    name: "HedgeFollow",
    url: "https://hedgefollow.com/",
    investorType: "Top Hedge Funds",
    region: "US"
  },
  {
    name: "Trendlyne India",
    url: "https://trendlyne.com/portfolio/superstar-shareholders/index/",
    investorType: "Superstar Investors",
    region: "India"
  },
  {
    name: "Trade Brains",
    url: "https://portal.tradebrains.in/superstars",
    investorType: "Superstar Portfolio",
    region: "India"
  },
  {
    name: "Univest",
    url: "https://univest.in/shark-portfolios",
    investorType: "Shark Portfolios",
    region: "India"
  }
];

const tableRows = websites.map(site => {
  return `
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;"><a href="${site.url}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;"><strong>${site.name}</strong></a></td>
      <td style="border: 1px solid #ccc; padding: 8px;">${site.region}</td>
      <td style="border: 1px solid #ccc; padding: 8px;">${site.investorType}</td>
    </tr>
  `;
}).join('');

const faq=[
  {question:"📌 Who is this extension for ?",
answer:`<ul style="margin-left:1rem; padding-left:1rem; list-style-type: disc;">
        <li>Indian & U.S. retail investors looking for <strong>confidence in stock picking</strong></li>
        <li>If you invest — or want to invest — in the stock market</li>
        <li>If you're ambitious about becoming <strong>financially free</strong></li>
        <li>If you don’t believe in <em>lottery wins</em> or <em>instant returns</em></li>
        <li>If you’re someone who can stay calm when the market tests your patience</li>
      </ul>

      <blockquote style="font-style: italic; margin: 1rem 0; padding-left: 1rem; border-left: 3px solid #ccc;">
        “Unless you can watch your stock holdings decline by 50% without becoming panic-stricken, you should not be in the stock market.”<br>
        — <strong>Warren Buffett</strong>
      </blockquote>

      <p>
        For example: I once bought <strong>Palred Tech</strong> at ₹27. When COVID hit, it fell to ₹8 — a <strong>71% drop</strong>. 
        I held on. And later sold at ₹91.
        <br>This happened frequently with my other stocks too. I was <strong>concerned but not in panic</strong>.
      </p>

      <p>
        One of my stock,Edelweiss Financial Services dropped down to  a <strong>50%</strong> compared to my entry price.
        Still, I didn’t sell. It climbed again to <strong>a 350%<strong>, then <strong>plunged to under 200%</strong> due to <em>tax war concerns</em>.
      </p>
      <p>
        Am I panicked? <strong>No.</strong> Am I concerned? <strong>Yes.</strong>
        But that’s <em>healthy fear</em> — the kind that keeps us alert and wise — just like when we try to cross a busy road in heavy traffic.
      </p>

      <blockquote style="font-style: italic; margin: 1rem 0; padding-left: 1rem; border-left: 3px solid #ccc;">
        “Reality of the world is based on probabilities and chances.”
      </blockquote>

      <p>
        If you believe identifying where <strong>top investors converge</strong> increases your odds of picking winners — this extension is for you.
      </p>

      <p>
        Anyone who believes in <strong>following the wisdom of experience</strong>.
      </p>`
  },
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
    
      question: '📌 What websites is this extension best suited for?',
      answer: `
        <p>This extension is designed to work best with platforms that showcase portfolios of <strong>top investors</strong> (referred to as "Superstars", "Sharks", etc.) from both <strong>India</strong> and the <strong>United States</strong>.</p>
    
        <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
          <thead>
            <tr>
              <th style="border: 1px solid #ccc; padding: 8px;">Website</th>
              <th style="border: 1px solid #ccc; padding: 8px;">Country</th>
              <th style="border: 1px solid #ccc; padding: 8px;">Focus</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
    
        <p><strong>Note:</strong> "Superstar" and "Shark" are terms used by these platforms to represent top-performing investors in their respective countries.</p>
        <p>🔁 More platforms will be supported in future updates. Have a suggestion? 📩 Submit via the Contact Form!</p>
      `
    
    
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
faqQuestions.forEach((question,index) => {
  const answer = question.nextElementSibling;
  if(question.textContent.includes('What websites is this extension best suited for?')){
    question.classList.add('active')
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
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
        // const answer = question.nextElementSibling;

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