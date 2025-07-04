// TechTOM Background Generator - Complete Application

// Complete quote database with all 6 tech roles
const quotes = {
    'developer': [
        { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
        { text: "Code is like humor. It's best when it works.", author: "Cory House" },
        { text: "Move fast and break things.", author: "Mark Zuckerberg" },
        { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
        { text: "Programs must be written for people to read.", author: "Harold Abelson" },
        { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        { text: "First, solve the problem.", author: "John Johnson" },
        { text: "Any fool can write code that a computer can understand.", author: "Martin Fowler" },
        { text: "Build it. Break it. Learn.", author: "Unknown" },
        { text: "Ship early. Refactor often.", author: "Unknown" },
        { text: "Coding is thinking made visible.", author: "Unknown" },
        { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
        { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
        { text: "Programming is the art of algorithm design and the craft of debugging errant code.", author: "Ellen Ullman" },
        { text: "Code is poetry written for machines to understand.", author: "Unknown" },
        { text: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan" },
        { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
        { text: "Good code is its own best documentation.", author: "Steve McConnell" },
        { text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
        { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" }
    ],    'product-owner': [
        { text: "Prioritize. Focus. Deliver.", author: "Unknown" },
        { text: "Say no to grow.", author: "Steve Jobs" },
        { text: "Less is more.", author: "Ludwig Mies van der Rohe" },
        { text: "The art of leadership is saying no.", author: "Tony Blair" },
        { text: "It's not the customer's job to know what they want.", author: "Steve Jobs" },
        { text: "Own the product, not the process.", author: "Unknown" },
        { text: "Value over volume.", author: "Unknown" },
        { text: "Decide what not to do.", author: "Steve Jobs" },
        { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
        { text: "The product is the business.", author: "Marty Cagan" },
        { text: "Features are assumptions until proven otherwise.", author: "Unknown" },
        { text: "Build what people need, not what they ask for.", author: "Unknown" },
        { text: "A good product manager knows the market, the product, and the team.", author: "Ben Horowitz" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "The customer's perception is your reality.", author: "Kate Zabriskie" },
        { text: "Don't find customers for your products, find products for your customers.", author: "Seth Godin" },
        { text: "If you define the problem correctly, you almost have the solution.", author: "Steve Jobs" },
        { text: "Good products solve problems. Great products solve problems elegantly.", author: "Unknown" },
        { text: "The goal isn't to build a website. The goal is to build your business.", author: "Unknown" },
        { text: "Product management is about making good decisions with incomplete information.", author: "Unknown" }
    ],    'product-manager': [
        { text: "Build the right thing.", author: "Unknown" },
        { text: "Vision drives product.", author: "Marty Cagan" },
        { text: "Great PMs listen more than they speak.", author: "Ken Norton" },
        { text: "You can't manage what you can't measure.", author: "Peter Drucker" },
        { text: "Fall in love with the problem.", author: "Uri Levine" },
        { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
        { text: "Think user-first.", author: "Unknown" },
        { text: "Outcomes over outputs.", author: "Josh Seiden" },
        { text: "Strategy without tactics is the slowest route to victory.", author: "Sun Tzu" },
        { text: "Data beats opinions.", author: "Unknown" },
        { text: "The best products are born from empathy.", author: "Unknown" },
        { text: "Product managers are the voice of the customer.", author: "Unknown" },
        { text: "Speed matters in business.", author: "Jeff Bezos" },
        { text: "Be stubborn on vision, flexible on details.", author: "Jeff Bezos" },
        { text: "The product manager is the CEO of the product.", author: "Ben Horowitz" },
        { text: "Focus on impact, not activity.", author: "Unknown" },
        { text: "Every feature is a bet.", author: "Unknown" },
        { text: "Prototype before you build.", author: "Unknown" },
        { text: "Learn fast, fail fast, improve fast.", author: "Unknown" },
        { text: "Product management is about making trade-offs.", author: "Unknown" }
    ],    'qa-lead': [
        { text: "Test early. Test often.", author: "Unknown" },
        { text: "Break it to make it better.", author: "Unknown" },
        { text: "Quality is everyone's job.", author: "W. Edwards Deming" },
        { text: "Testing shows presence, not absence of bugs.", author: "Edsger Dijkstra" },
        { text: "Quality is never an accident.", author: "John Ruskin" },
        { text: "Assume nothing. Test everything.", author: "Unknown" },
        { text: "Bugs don't hide — they wait.", author: "Unknown" },
        { text: "Trust, but verify.", author: "Ronald Reagan" },
        { text: "The bitterness of poor quality remains long after the sweetness of low price is forgotten.", author: "Benjamin Franklin" },
        { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
        { text: "Testing is an investment in confidence.", author: "Unknown" },
        { text: "A bug in production is worth ten in testing.", author: "Unknown" },
        { text: "Good testing is like insurance - you hope you'll never need it.", author: "Unknown" },
        { text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
        { text: "The goal of testing is not to eliminate every bug, but to reduce risk.", author: "Unknown" },
        { text: "Automate everything you can, test everything you should.", author: "Unknown" },
        { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
        { text: "The customer doesn't care how hard you worked, only whether it works.", author: "Unknown" },
        { text: "Testing is questioning a product in order to evaluate it.", author: "James Bach" },
        { text: "Better to prevent than to cure.", author: "Unknown" }
    ],    'designer': [
        { text: "Design solves problems.", author: "Unknown" },
        { text: "Form follows function.", author: "Louis Sullivan" },
        { text: "Make it simple.", author: "Steve Krug" },
        { text: "Design is how it works.", author: "Steve Jobs" },
        { text: "Good design is invisible.", author: "Dieter Rams" },
        { text: "People ignore design that ignores people.", author: "Frank Chimero" },
        { text: "Delight is in the details.", author: "Charles Eames" },
        { text: "Clarity is king.", author: "Unknown" },
        { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
        { text: "Design is not just what it looks like - design is how it works.", author: "Steve Jobs" },
        { text: "Content precedes design. Design in the absence of content is not design, it's decoration.", author: "Jeffrey Zeldman" },
        { text: "The details are not the details. They make the design.", author: "Charles Eames" },
        { text: "Design is thinking made visual.", author: "Saul Bass" },
        { text: "Good design is good business.", author: "Thomas Watson Jr." },
        { text: "Everything is designed. Few things are designed well.", author: "Brian Reed" },
        { text: "Design is where science and art break even.", author: "Robin Mathew" },
        { text: "The best design is the simplest one that works.", author: "Albert Einstein" },
        { text: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" },
        { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
        { text: "A user interface is like a joke. If you have to explain it, it's not that good.", author: "Martin LeBlanc" }
    ],    'architect': [
        { text: "Think in systems.", author: "Unknown" },
        { text: "Complexity is a choice.", author: "Gregory Brown" },
        { text: "Design for change.", author: "Grady Booch" },
        { text: "Architecture begins where engineering ends.", author: "Walter Gropius" },
        { text: "The best architecture emerges from teams.", author: "Agile Manifesto" },
        { text: "Start with the experience.", author: "Steve Jobs" },
        { text: "Structure enables scale.", author: "Unknown" },
        { text: "Big picture. Small details.", author: "Unknown" },
        { text: "Architecture is about the important stuff. Whatever that is.", author: "Ralph Johnson" },
        { text: "Good architecture makes the system easy to understand, develop, maintain, and deploy.", author: "Robert C. Martin" },
        { text: "The architect's job is to make complexity simple.", author: "Unknown" },
        { text: "Plan for failure, design for success.", author: "Unknown" },
        { text: "Architecture is the art of how to waste space.", author: "Philip Johnson" },
        { text: "Modularity is the key to maintainability.", author: "Unknown" },
        { text: "Build systems that survive their creators.", author: "Unknown" },
        { text: "The best architectures are grown, not built.", author: "Unknown" },
        { text: "Document decisions, not code.", author: "Unknown" },
        { text: "Optimize for developer happiness.", author: "Unknown" },
        { text: "Architecture is about decisions, not documentation.", author: "Unknown" },
        { text: "Keep it simple, but not simpler than necessary.", author: "Unknown" }
    ]
};

// Application state
let currentRole = 'developer';
let selectedQuote = null;
let customMode = false;
let canvas, ctx;
let backgroundImage = null;

// Initialize the application
function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    // Load the background image (Supporter.jpg)
    loadBackgroundImage();
    
    // Load quotes for default role
    loadQuotes(currentRole);
    
    // Set up custom quote listeners
    setupCustomQuoteListeners();
}

// Load the original Supporter.jpg background
function loadBackgroundImage() {
    backgroundImage = new Image();
    backgroundImage.crossOrigin = 'anonymous';
    backgroundImage.onload = function() {
        drawBackground();
    };
    backgroundImage.onerror = function() {
        console.log('Could not load Supporter.jpg, using fallback');
        createFallbackBackground();
    };
    // Load the actual Supporter.jpg from the same directory
    backgroundImage.src = './Supporter.jpg';
}
// Create fallback background if Supporter.jpg can't be loaded
function createFallbackBackground() {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 1920;
    tempCanvas.height = 1080;
    const tempCtx = tempCanvas.getContext('2d');
    
    // Recreate the TechTOM background design
    const gradient = tempCtx.createLinearGradient(0, 0, tempCanvas.width, tempCanvas.height);
    gradient.addColorStop(0, '#1a202c');
    gradient.addColorStop(0.5, '#2d3748');
    gradient.addColorStop(1, '#4a5568');
    
    tempCtx.fillStyle = gradient;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    
    // TechTOM logo
    tempCtx.fillStyle = 'white';
    tempCtx.font = 'bold 120px Fredoka, sans-serif';
    tempCtx.textAlign = 'left';
    tempCtx.fillText('TechTOM', 100, 200);
    
    // Version badge
    const badgeX = 520;
    const badgeY = 120;
    const badgeRadius = 45;
    
    const badgeGradient = tempCtx.createLinearGradient(badgeX - badgeRadius, badgeY - badgeRadius, badgeX + badgeRadius, badgeY + badgeRadius);
    badgeGradient.addColorStop(0, '#ff7b00');
    badgeGradient.addColorStop(1, '#ff4757');
    
    tempCtx.fillStyle = badgeGradient;
    tempCtx.beginPath();
    tempCtx.arc(badgeX, badgeY, badgeRadius, 0, 2 * Math.PI);
    tempCtx.fill();    
    tempCtx.fillStyle = 'white';
    tempCtx.font = 'bold 36px Fredoka, sans-serif';
    tempCtx.textAlign = 'center';
    tempCtx.fillText('2.7', badgeX, badgeY + 12);
    
    // "Supporter" text
    tempCtx.fillStyle = 'white';
    tempCtx.font = 'bold 72px Fredoka, sans-serif';
    tempCtx.textAlign = 'right';
    tempCtx.fillText('Supporter', tempCanvas.width - 100, 200);
    
    // Bottom colored lines
    const lineHeight = 20;
    const lineY = tempCanvas.height - 150;
    
    tempCtx.fillStyle = '#ff7b00';
    tempCtx.fillRect(0, lineY, tempCanvas.width, lineHeight);
    
    tempCtx.fillStyle = '#ff4757';
    tempCtx.fillRect(0, lineY + 30, tempCanvas.width, lineHeight);
    
    tempCtx.fillStyle = '#5f27cd';
    tempCtx.fillRect(0, lineY + 60, tempCanvas.width, lineHeight);
    
    backgroundImage = new Image();
    backgroundImage.onload = function() {
        drawBackground();
    };
    backgroundImage.src = tempCanvas.toDataURL();
}

// Draw the background and quote
function drawBackground() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the background image (Supporter.jpg or fallback)
    if (backgroundImage) {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    }
    
    // Draw quote if selected
    if (selectedQuote || customMode) {
        drawQuote();
    }
}
// Draw the selected quote on the background
function drawQuote() {
    let quoteText = '';
    let authorText = '';
    
    if (customMode) {
        quoteText = document.getElementById('customQuoteText').value.trim();
        authorText = document.getElementById('customQuoteAuthor').value.trim() || 'Unknown';
    } else if (selectedQuote) {
        quoteText = selectedQuote.text;
        authorText = selectedQuote.author || 'Unknown';
    }
    
    if (!quoteText) return;
    
    // Position quote below "Supporter" text (top right area)
    const quoteX = canvas.width - 100;
    const quoteY = 300; // Starting position below "Supporter"
    const maxWidth = 650; // Max width for text wrapping
    
    ctx.fillStyle = 'white';
    ctx.font = '36px Fredoka, sans-serif';
    ctx.textAlign = 'right';
    
    // Wrap text for long quotes
    const words = quoteText.split(' ');
    const lines = [];
    let currentLine = '';
    
    for (let word of words) {
        const testLine = currentLine + (currentLine ? ' ' : '') + word;
        const metrics = ctx.measureText(`"${testLine}"`);
        
        if (metrics.width > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }
    if (currentLine) lines.push(currentLine);    
    // Draw quote text with proper quotes
    if (lines.length === 1) {
        // Single line - add quotes around the whole thing
        ctx.fillText(`"${lines[0]}"`, quoteX, quoteY);
    } else {
        // Multiple lines - add opening quote to first line, closing quote to last line
        ctx.fillText(`"${lines[0]}`, quoteX, quoteY);
        
        for (let i = 1; i < lines.length - 1; i++) {
            ctx.fillText(lines[i], quoteX, quoteY + (i * 45));
        }
        
        if (lines.length > 1) {
            ctx.fillText(`${lines[lines.length - 1]}"`, quoteX, quoteY + ((lines.length - 1) * 45));
        }
    }
    
    // Draw author with proper spacing
    ctx.font = '28px Fredoka, sans-serif';
    ctx.fillStyle = '#e2e8f0';
    const authorY = quoteY + (lines.length * 45) + 40;
    ctx.fillText(`- ${authorText}`, quoteX, authorY);
}

// Select a role and update the quote list
function selectRole(role) {
    currentRole = role;
    customMode = false;
    selectedQuote = null;
    
    // Update UI
    document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Clear custom inputs
    document.getElementById('customQuoteText').value = '';
    document.getElementById('customQuoteAuthor').value = '';
    
    // Load quotes for selected role
    loadQuotes(role);
    
    // Redraw canvas
    drawBackground();
}
// Load quotes for the selected role
function loadQuotes(role) {
    const container = document.getElementById('quotesContainer');
    container.innerHTML = '';
    
    quotes[role].forEach((quote, index) => {
        const quoteItem = document.createElement('div');
        quoteItem.className = 'quote-item';
        quoteItem.onclick = () => selectQuote(quote, quoteItem);
        
        quoteItem.innerHTML = `
            <div class="quote-text">"${quote.text}"</div>
            <div class="quote-author">- ${quote.author}</div>
        `;
        
        container.appendChild(quoteItem);
    });
}

// Select a specific quote
function selectQuote(quote, element) {
    selectedQuote = quote;
    customMode = false;
    
    // Update UI
    document.querySelectorAll('.quote-item').forEach(item => item.classList.remove('selected'));
    element.classList.add('selected');
    
    // Clear custom inputs
    document.getElementById('customQuoteText').value = '';
    document.getElementById('customQuoteAuthor').value = '';
    
    // Redraw canvas
    drawBackground();
}

// Setup custom quote input listeners
function setupCustomQuoteListeners() {
    const customText = document.getElementById('customQuoteText');
    const customAuthor = document.getElementById('customQuoteAuthor');
    
    function updateCustomQuote() {
        if (customText.value.trim()) {
            customMode = true;
            selectedQuote = null;
            
            // Clear selected quote
            document.querySelectorAll('.quote-item').forEach(item => item.classList.remove('selected'));
            
            drawBackground();
        }
    }
    
    customText.addEventListener('input', updateCustomQuote);
    customAuthor.addEventListener('input', updateCustomQuote);
}
// Export the final image
function exportImage() {
    const link = document.createElement('a');
    const randomId = Math.floor(Math.random() * 900) + 100;
    link.download = `TechTOM_Teams_Background_${randomId}.jpg`;
    link.href = canvas.toDataURL('image/jpeg', 0.9);
    link.click();
}

// Initialize when page loads
window.addEventListener('load', init);