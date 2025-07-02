function netejarText() {
  const input = document.getElementById("inputText").value;

  let net = input
    .replace(/["*#]/g, "")               
    .replace(/•|–|-/g, "-")              
    .replace(/\s{2,}/g, " ")             
    .replace(/\n{3,}/g, "\n\n")          
    .trim();

  mostrarPreview(net);
}

function reestructurarText() {
  const input = document.getElementById("inputText").value;

  let restructurat = input
    .replace(/["*#]/g, "")                       
    .replace(/\s{2,}/g, " ")                     
    .replace(/\.\s+(?=[A-ZÀ-Ü])/g, ".\n\n")     
    .replace(/•|–|-/g, "-")                      
    .replace(/\n{3,}/g, "\n\n")                  
    .trim();

  mostrarPreview(restructurat);
}

function professionalizePrompt() {
  const input = document.getElementById("inputText").value;

  let cleaned = input
    .replace(/[#*“”"•🔹🔸⚠️✅🧠📌]+/g, "")  
    .replace(/\s{2,}/g, " ")             
    .replace(/\n{3,}/g, "\n\n")        
    .replace(/\.\s+(?=[A-ZÀ-Ü])/g, ".\n\n") 
    .replace(/\|\|/g, "\n")            
    .replace(/\n{2,}/g, "\n\n")        
    .trim();

  mostrarPreview(cleaned);
}

function mostrarPreview(text) {
  const box = document.getElementById("previewBox");
  box.innerText = text;
}

function copiarText() {
  const text = document.getElementById("previewBox").innerText;
  navigator.clipboard.writeText(text)
    .then(() => alert("✅ Text copiat!"))
    .catch(err => console.error("❌ Error al copiar:", err));
}