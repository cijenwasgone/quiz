// --- 35 SOAL GABUNGAN (Semua Soal Sebelumnya dan Soal Terbaru) ---
const questions = [
    // === 10 SOAL DARI SESI PERTAMA ===
    {   // 1. (do-while loop)
        question: `Potongan koding berikut menghasilkan output apa?\n\nint i=1;\ndo{\n  System.out.println("Looping ke-"+i);\n  i++;\n}while(i<=5);`,
        answers: [
            { text: "0 1 2 3 4", correct: false },
            { text: "2 3 4 5 6", correct: false },
            { text: "0 1 2 3 4 5", correct: false },
            { text: "1 2 3 4 5", correct: true }, 
        ]
    },
    {   // 2. (for loop, Output 1-5)
        question: "Untuk menghasilkan output:\nLooping ke-1\n...Looping ke-5\n\nPilih potongan koding yang menghasilkan output tersebut?",
        answers: [
            { text: "for(int i=0;i<5;i++){ System.out.println(\"Looping ke-\"+(i+1)); }", correct: true },
            { text: "for(int i=0;i<=5;i++){ System.out.println(\"Looping ke-\"+i); }", correct: false },
            { text: "for(int i=1;i<5;i++){ System.out.println(\"Looping ke-\"+i); }", correct: false },
            { text: "for(int i=1;i<=5;i++){ System.out.println(\"Looping ke-\"+(i+1)); }", correct: false },
        ]
    },
    {   // 3. (Panjang Array)
        question: `Diberikan array:\nint [] nilai={50,60,70,80,90};\n\nUntuk mengetahui jumlah isi Array menggunakan? (Asumsi Java)`,
        answers: [
            { text: "nilai.count", correct: false },
            { text: "nilai.length", correct: true },
            { text: "nilai.count()", correct: false },
            { text: "nilai.length()", correct: false },
        ]
    },
    {   // 4. (Switch statement) - DIPERBAIKI
        question: `Program ini menghasilkan output apa?\n\nint a=2;\nswitch(a){\n  case 0: System.out.println("Nilai a = 0"); break;\n  case 1: System.out.println("Nilai a = 1"); break;\n  case 2: System.out.println("Nilai a = 2"); break;\n  default: System.out.println("Nilai Case tidak terpenuhi");\n}`,
        answers: [
            { text: "Nilai Case tidak terpenuhi", correct: false },
            { text: "Nilai a = 2", correct: true },
            { text: "Nilai a = 2\nNilai Case tidak terpenuhi", correct: false },
            { text: "Nilai a = 1\nNilai a = 2", correct: false },
        ]
    },
    {   // 5. (Deklarasi Class)
        question: "Manakah pembuatan class *Latihan1* yang benar?",
        answers: [
            { text: "public static void main(String [] args){...}", correct: false },
            { text: "public class Latihan1{ public static void main(String [] args){...}}", correct: true },
            { text: "public class Latihan1{ public static void main(String args []){...}}", correct: false },
        ]
    },
    {   // 6. (Array Indexing dan Penjumlahan)
        question: `Diberikan array:\nint[]nilai={50,60,70,80,90};\n\nOutput dari potongan program:\nSystem.out.println(nilai[2]+nilai[3]);`,
        answers: [
            { text: "6070", correct: false },
            { text: "7080", correct: false },
            { text: "150", correct: true }, 
            { text: "130", correct: false },
        ]
    },
    {   // 7. (for loop output angka)
        question: `Potongan koding berikut menghasilkan output apa?\n\nfor(int i=0;i<5;i++){\n  System.out.print((i+1)+" ");\n}`,
        answers: [
            { text: "1 2 3 4", correct: false },
            { text: "1 2 3 4 5", correct: true },
            { text: "0 1 2 3 4 5", correct: false },
            { text: "0 1 2 3 4", correct: false },
        ]
    },
    {   // 8. (Input String Scanner)
        question: "Perintah untuk input tipe String yang benar? (Asumsi menggunakan Scanner Java)",
        answers: [
            { text: "Scanner keyboard = new Scanner(System.in);\nkeyboard.nextline();", correct: false },
            { text: "Scanner keyboard = new Scanner(System);\nkeyboard.nextLine();", correct: false },
            { text: "Scanner keyboard = new Scanner(System.in);\nkeyboard.nextLine();", correct: true },
            { text: "Scanner keyboard = new Scanner(System.in);\nkeyboard.nextString();", correct: false },
        ]
    },
    {   // 9. (Deklarasi Array - Multi-Jawaban)
        question: "Cara deklarasi Array yang benar? (Pilih dua)",
        answers: [
            { text: "nilai int [];", correct: false },
            { text: "int nilai [];", correct: true, multiCorrect: true },
            { text: "int nilai {};", correct: false },
            { text: "int {} nilai;", correct: false },
            { text: "int [] nilai;", correct: true, multiCorrect: true },
        ]
    },
    {   // 10. (Array Indexing dan Konkatenasi String)
        question: `Diberikan array:\nint[]nilai={50,60,70,80,90};\n\nOutput dari potongan program:\nSystem.out.println("Nilai=" + nilai[2] + nilai[3]);`,
        answers: [
            { text: "Nilai=6070", correct: false },
            { text: "Nilai=7080", correct: true },
            { text: "Nilai=130", correct: false },
            { text: "Nilai=150", correct: false },
        ]
    },
    
    // === 10 SOAL DARI SESI KEDUA ===
    {   // 11. (while loop)
        question: `Potongan koding berikut menghasilkan output apa?\n\nint i = 1;\nwhile(i <= 5){\n  System.out.println(i + " ");\n  i++;\n}`,
        answers: [
            { text: "1 2 3 4", correct: false },
            { text: "1 2 3 4 5", correct: true },
            { text: "5 4 3 2 1", correct: false },
            { text: "0 1 2 3 4", correct: false },
        ]
    },
    {   // 12. (for loop, Output 1-5)
        question: "Untuk menghasilkan output:\nLooping ke-1\n...Looping ke-5\n\nPilih potongan koding yang menghasilkan output tersebut?",
        answers: [
            { text: "for(int i=1;i>=5;i++){ System.out.println(\"Looping ke-\"+i); }", correct: false },
            { text: "for(int i=1;i<=5;i++){ System.out.println(\"Looping ke-\"+i); }", correct: true },
            { text: "for(int i=1;i<5;i++){ System.out.println(\"Looping ke-\"+i); }", correct: false },
            { text: "for(int i=1;i>5;i++){ System.out.println(\"Looping ke-\"+i); }", correct: false },
        ]
    },
    {   // 13. (Nilai Default Array Integer)
        question: "Nilai Default dari Array dengan Tipe Data integer adalah ?",
        answers: [
            { text: "Kosong", correct: false },
            { text: "0", correct: true },
            { text: "Error", correct: false },
            { text: "null", correct: false },
        ]
    },
    {   // 14. (Nilai Default Array Double)
        question: "Nilai Default dari Array dengan Tipe Data double adalah ?",
        answers: [
            { text: "0", correct: false },
            { text: "null", correct: false },
            { text: "0.0", correct: true },
            { text: "Error", correct: false },
        ]
    },
    {   // 15. (Variabel vs Konstanta)
        question: "Data yang dapat berubah selama program berjalan ?",
        answers: [
            { text: "Objek", correct: false },
            { text: "Konstanta", correct: false },
            { text: "Tipe Data", correct: false },
            { text: "Variabel", correct: true },
        ]
    },
    {   // 16. (Import Scanner)
        question: "Menggunakan kelas Scanner harus import ?",
        answers: [
            { text: "import java.scanner.util;", correct: false },
            { text: "import java.util.Scan;", correct: false },
            { text: "import scanner.util.java;", correct: false },
            { text: "import java.util.Scanner;", correct: true },
        ]
    },
    {   // 17. (Deklarasi Class - Pilihan Lain)
        question: "Manakah pembuatan class *Latihan1* yang benar?",
        answers: [
            { text: "Public class Latihan1{ Public static void main(String [] args){}}", correct: false },
            { text: "public class Latihan1{ public static void main(String [] args){}}", correct: true },
            { text: "public class Latihan 1{ public static void main(String [] args){}}", correct: false },
        ]
    },
    {   // 18. (Array Indexing dan Penjumlahan)
        question: `Diberikan array:\nint[]nilai={50,60,70,80,90};\n\nOutput dari potongan program:\nSystem.out.println(nilai[1]+nilai[2]);`,
        answers: [
            { text: "5060", correct: false },
            { text: "130", correct: true },
            { text: "110", correct: false },
            { text: "6070", correct: false },
        ]
    },
    {   // 19. (String Array Concatenation)
        question: `Diberikan array:\nString nama[]={"Dadan","Didin","Deden","Maman"};\n\nOutput dari potongan program:\nSystem.out.print(nama[3] + nama[1]);`,
        answers: [
            { text: "Didin Deden", correct: false },
            { text: "Maman Didin", correct: true },
            { text: "Deden Didin", correct: false },
            { text: "Didin Maman", correct: false },
        ]
    },
    {   // 20. (Switch statement - No Break)
        question: `Program ini menghasilkan output apa?\n\nint a=1;\nswitch(a){\n  case 0: System.out.println("Nilai a = 0");\n  case 1: System.out.println("Nilai a = 1");\n  case 2: System.out.println("Nilai a = 2");\n  default: System.out.println("Nilai Case tidak terpenuhi");\n}`,
        answers: [
            { text: "Nilai a=0\nNilai a=1", correct: false },
            { text: "Nilai a=1\nNilai a=2\nNilai Case tidak terpenuhi", correct: true },
            { text: "Nilai a=1\nNilai a=2", correct: false },
            { text: "Nilai a=1", correct: false },
        ]
    },

    // === 10 SOAL DARI SESI KETIGA ===
    {   // 21. (If-Else Input)
        question: `Jika di input 70 maka outputnya?\n\n...\nint nilai;\nnilai = keyboard.nextInt();\nif (nilai < 70) {\n  System.out.println("Nilai "+nilai+" = Lulus");\n} else {\n  System.out.println("Nilai "+nilai+" = Gagal");\n}`,
        answers: [
            { text: "Nilai 70 = Lulus", correct: false },
            { text: "Nilai 70 = Gagal", correct: true }, 
        ]
    },
    {   // 22. (Array Contents)
        question: "Array pada java merupakan object yang dapat berisi ?.",
        answers: [
            { text: "Class Saja", correct: false },
            { text: "Tipe Primitif Saja", correct: false },
            { text: "Tipe Data Primitif dan Method", correct: false },
            { text: "Tipe Data Primitif dan Class", correct: true }, 
        ]
    },
    {   // 23. (Variable Declaration)
        question: "Manakah Deklarasi Variabel yang BENAR ? (diakhiri titik koma)",
        answers: [
            { text: "nilaiUTS int;", correct: false }, 
            { text: "int $nilai_UTS", correct: false }, 
            { text: "int nilaiUTS", correct: false }, 
            { text: "int nilaiUTS;", correct: true },
        ]
    },
    {   // 24. (Array Indexing)
        question: `String nama[]={"Dadan","Didin","Deden","Maman"};\nSystem.out.print(nama[2]);`,
        answers: [
            { text: "Dadan", correct: false },
            { text: "Maman", correct: false },
            { text: "Deden", correct: true }, 
            { text: "Didin", correct: false },
        ]
    },
    {   // 25. (While Loop Output)
        question: `Potongan koding tersebut menghasilkan output ?\n\nint i=0;\nwhile(i<5){\n  System.out.print(i+\" \");\n  i++;\n}`,
        answers: [
            { text: "0 1 2 3 4 5", correct: false },
            { text: "1 2 3 4", correct: false },
            { text: "1 2 3 4 5", correct: false },
            { text: "0 1 2 3 4", correct: true }, 
        ]
    },
    {   // 26. (Comments)
        question: "Untuk memberikan keterangan/penjelasan suatu baris program Kita buat ?",
        answers: [
            { text: "Methods", correct: false },
            { text: "Block {}", correct: false },
            { text: "Modifier", correct: false },
            { text: "Comments", correct: true },
        ]
    },
    {   // 27. (Switch Data Types)
        question: "Tipe data yang boleh pada ekspresi switch (Java) ?",
        answers: [
            { text: "char, byte, long, int", correct: false }, 
            { text: "float, byte, short, int", correct: false }, 
            { text: "char, byte, short, int", correct: true }, 
            { text: "long, byte, short, int", correct: false }, 
        ]
    },
    {   // 28. (Nilai Default Array Char)
        question: "Nilai Default dari Array dengan Tipe Data char adalah ?",
        answers: [
            { text: "Error", correct: false },
            { text: "0", correct: false },
            { text: "null", correct: false },
            { text: "Kosong", correct: true }, 
        ]
    },
    {   // 29. (Variable Initialization No Error)
        question: "Pilih pembuatan variabel yang tidak eror ?",
        answers: [
            { text: "float nilai=10.0;", correct: false }, 
            { text: "Salah Semua", correct: false },
            { text: "int nilai=\"5\";", correct: false }, 
            { text: "double nilai='5';", correct: true }, 
        ]
    },
    {   // 30. (Comments - Duplikat)
        question: "Untuk memberikan keterangan/penjelasan suatu baris program Kita buat ?",
        answers: [
            { text: "Methods", correct: false },
            { text: "Block {}", correct: false },
            { text: "Modifier", correct: false },
            { text: "Comments", correct: true },
        ]
    },

    // === 5 SOAL DARI SESI KEEMPAT (TERBARU) ===
    {   // 31. (Array Indexing Out of Bounds)
        question: `String nama[]={"Dadan","Didin","Deden","Maman"};\nSystem.out.print(nama[4]);`,
        answers: [
            { text: "Maman", correct: false },
            { text: "Dadan", correct: false },
            { text: "Eror saat di Run", correct: true }, 
            { text: "Eror saat di-compile", correct: false },
            { text: "Didin", correct: false },
        ]
    },
    {   // 32. (while loop - i++ sebelum print)
        question: `Potongan koding tersebut menghasilkan output ?\n\nint i=1;\nwhile(i<=5){\n  i++;\n  System.out.print(i+\" \");\n}`,
        answers: [
            { text: "1 2 3 4 5", correct: false },
            { text: "0 1 2 3 4", correct: false },
            { text: "2 3 4 5 6", correct: true }, 
            { text: "0 1 2 3 4 5", correct: false },
        ]
    },
    {   // 33. (Switch statement - No Break, a=0)
        question: `Program ini menghasilkan output ?\n\nint a=0;\nswitch(a){\n  case 0: System.out.println("Nilai a = 0");\n  case 1: System.out.println("Nilai a = 1"); break;\n  case 2: System.out.println("Nilai a = 2"); break;\n  default: System.out.println("Nilai Case tidak terpenuhi");\n}`,
        answers: [
            { text: "Nilai a=0\nNilai a=1", correct: true }, 
            { text: "Nilai a=0", correct: false },
            { text: "Nilai a=0\nNilai a=1\nNilai a=2\nNilai Case tidak terpenuhi", correct: false },
            { text: "Nilai a=0\nNilai a=1\nNilai Case tidak terpenuhi", correct: false },
        ]
    },
    {   // 34. (String Array Initialization)
        question: "Cara pembuatan objek Array yang benar ? (Array 50 elemen)",
        answers: [
            { text: "int [] nilai = new int[50];", correct: true }, 
            { text: "int [] nilai = int[50];", correct: false }, 
            { text: "String [] nilai=new String{50};", correct: false }, 
            { text: "int {} nilai=new int(50);", correct: false }, 
        ]
    },
    {   // 35. (String Comparison)
        question: "Pilih perintah untuk membandingkan string yang benar ? (Asumsi 'nama' adalah variabel String)",
        answers: [
            { text: "if(nama.equals(eza))", correct: false }, 
            { text: "if(nama.equals(\"eza\"))", correct: true }, 
            { text: "if(nama==\"eza\")", correct: false }, 
            { text: "if(nama=\"eza\")", correct: false }, 
        ]
    }
];

// --- JANGAN UBAH KODE DI BAWAH INI (LOGIKA KUIS) ---

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-btn");
const answerKeyElement = document.getElementById("answer-key");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    quizSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    answerKeyElement.innerHTML = "";
    nextButton.innerHTML = "Selanjutnya";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    questionElement.innerHTML = `<pre>${questionNo}. ${currentQuestion.question}</pre>`;

    // Logika multi-jawaban (hanya untuk soal No. 9)
    if (currentQuestion.answers.some(a => a.multiCorrect)) {
        nextButton.innerHTML = "Kirim Jawaban";
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            button.classList.add("multi-select");
            button.dataset.correct = answer.correct;
            button.addEventListener("click", toggleMultiSelect);
            answerButtonsElement.appendChild(button);
        });
        nextButton.onclick = processMultiSelect;
    } else {
        nextButton.innerHTML = "Selanjutnya";
        nextButton.onclick = handleNextButton;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    nextButton.classList.add("hidden");
}

function resetState() {
    nextButton.classList.add("hidden");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    answered = false;
}

function selectAnswer(e) {
    if (answered) return;
    answered = true;
    
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.classList.remove("hidden");
}

function toggleMultiSelect(e) {
    if (answered) return;
    e.target.classList.toggle("selected");
    nextButton.classList.remove("hidden");
}

function processMultiSelect() {
    if (answered) {
        handleNextButton();
        return;
    }

    answered = true;
    let allCorrectSelected = true;
    let hasSelected = false;

    const buttons = Array.from(answerButtonsElement.children);

    buttons.forEach(button => {
        const isCorrectOption = button.dataset.correct === "true";
        const isSelected = button.classList.contains("selected");

        button.disabled = true;
        
        if (isCorrectOption) {
            button.classList.add("correct");
        } else if (isSelected && !isCorrectOption) {
            button.classList.add("incorrect");
        }
        
        if (isCorrectOption !== isSelected) {
            allCorrectSelected = false;
        }
        if (isSelected) {
            hasSelected = true;
        }
    });

    if (allCorrectSelected && hasSelected) {
        score++;
    }

    nextButton.innerHTML = "Selanjutnya";
    nextButton.onclick = handleNextButton;
    nextButton.classList.remove("hidden");
}

// ... (Kode sebelum fungsi showScore tetap sama) ...

// Fungsi untuk menampilkan hasil akhir (MODIFIKASI)
function showScore() {
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    const totalQuestions = questions.length;
    let finalScore = 0;
    
    // Hitung nilai (skala 0-100)
    if (totalQuestions > 0) {
        finalScore = Math.round((score / totalQuestions) * 100);
    }

    scoreText.innerHTML = `
        <p>Anda menjawab **${score}** dari **${totalQuestions}** pertanyaan dengan benar.</p>
        <h2>Nilai Akhir Anda: ${finalScore} / 100</h2>
    `;
    
    displayAnswerKey(); 
}

function displayAnswerKey() {
    let keyHTML = '<h3>Kunci Jawaban dan Pembahasan:</h3>';
    
    questions.forEach((q, index) => {
        const correctAnswers = q.answers.filter(a => a.correct);
        const correctText = correctAnswers.map(a => a.text).join('<br> &nbsp;&nbsp;&nbsp; **DAN** ');
        
        keyHTML += `<div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; text-align: left;">`;
        keyHTML += `<h4>Soal ${index + 1}:</h4>`;
        // PERHATIAN: Meningkatkan font-size untuk pr di Kunci Jawaban
        keyHTML += `<pre style="white-space: pre-wrap; background-color: #eee; padding: 5px; border-radius: 3px; font-size: 16px;">${q.question}</pre>`; 
        keyHTML += `<p><strong>Jawaban Benar:</strong> ${correctText || 'Tidak ada jawaban benar.'}</p>`;
        keyHTML += `</div>`;
    });
    
    answerKeyElement.innerHTML = keyHTML;
}

// ... (Kode setelah fungsi displayAnswerKey tetap sama) ...

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex >= questions.length) {
        startQuiz();
    }
});

restartButton.addEventListener("click", startQuiz);

startQuiz();
