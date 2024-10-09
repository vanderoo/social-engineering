const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'dinas.kesehatan.survey@gmail.com',
        pass: 'rpuwqaaotibjuhkp'    
    }
});

let recipients_test = [
    { name: 'Evander Tokang', email: 'tokangslayer@gmail.com' },
    { name: 'Fahriza Harits', email: 'fahrizaharits123@gmail.com' },
    { name: 'Genta Alima Persada', email: 'biggent321@gmail.com'}
]

let recipients = [
    { name: 'Adzan', email: 'zannn3004@gmail.com' },
    { name: 'Akmal Nicholas Jeffannya', email: 'akmalromdhoni8@upi.edu' },
    { name: 'Ani Hanipah', email: 'aniade21041967@gmail.com' },
    { name: 'Nurlaila Ramadhani', email: 'nurlailaramadhani02@upi.edu' },
    { name: 'Yeyeh Nurhayati', email: 'yeyehnurhayati226@gmail.com' },
    { name: 'Ranti Widiyanti', email: 'widiyantinarti21@gmail.com' },
    { name: 'Tresna Puspita', email: 'ghea2120@gmail.com' },
    { name: 'Neng Reni Rizki', email: 'nrenirizki@gmail.com' },
    { name: 'Rinrin Regina', email: 'rinrinr494@gmail.com' },
    { name: 'Eli Sudaryati', email: 'elisudaryati55@gmail.com' },
    { name: 'Indra Maulana', email: '0212i94m@gmail.com' },
    { name: 'Ade Dedi Sutiswan', email: 'adededisutiawan123@gmail.com' },
    { name: 'Hafidz', email: 'mochhafidzseptian27@gmail.com' },
    { name: 'Galuh Hasan Bahtiar', email: 'galuhhasanbahtiar1@gmail.com' },
    { name: 'Fajar Putra Gumilang', email: 'fajarputragumilangpg@gmail.com' },
    { name: 'Selly', email: 'cahyaniseliy@gmail.com' },
    { name: 'Fajar Nugraha', email: 'nugraha.fajar13@gmail.com' },
    { name: 'David Ikhsan Mulyadi', email: 'ikhsanikhsan157@gmail.com' },
    { name: 'Agussani', email: 'agussanimiftahf@gmail.com' },
    { name: 'Hayyulia Putri', email: 'hayyuliaputriw@gmail.com' },
    { name: 'Sigit Pratama Ramadhan', email: 'sigitpratama826@gmail.com' },
    { name: 'Ramanda Putri Mardiyani', email: 'ramandaputrimardiyana@upi.edu' },
    { name: 'Vadila Zikra', email: 'vadilazkra@upi.edu' },
    { name: 'Valian Noya', email: 'phinkkypus@gmail.com' },
    { name: 'Salwa', email: 'salwacan.khadijahmi@gmail.com' }
];


const createEmailContent = (name) => {
return `
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Undangan Survei Kesehatan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .email-container {
            background-color: #fcfcfc;
            margin: 20px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            color: #000;
            padding: 10px;
            text-align: center;
            border-radius: 8px 8px 0 0;
            border: 2px solid #00b9ad;
        }

        .header h2 {
            color: #00b9ad;
        }

        .logo {
            width: 50px;
            height: auto;
            margin-right: 10px;
        }

        .content {
            padding: 20px;
            line-height: 1.6;
        }

        .content h1 {
            color: #00b9ad;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #00b9ad;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }

        .footer {
            font-size: 12px;
            color: #777;
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>

<body>

    <div class="email-container">
        <div class="header">
            <img src="logo.png" alt="Logo Kementerian Kesehatan" class="logo" />
            <h2>Kemenkes</h2>
        </div>

        <div class="content">
            <p>Yth. Bapak/Ibu <strong>${name}</strong>,</p>
            <p style="text-align: justify;">
                Kami sedang mengadakan survei untuk memahami lebih lanjut dampak kesehatan setelah 5 tahun pasca COVID-19
                berakhir. Partisipasi Anda sangat berharga bagi kami untuk memperoleh wawasan yang lebih mendalam dan
                membantu menciptakan program kesehatan yang lebih baik.
            </p>
            <p style="text-align: justify;">
                Kami sangat menghargai kesediaan Anda untuk meluangkan waktu dalam memberikan tanggapan melalui survei
                berikut:
            </p>
            <p style="text-align: center;">
                <a href="https://forms.gle/96QF5TPz9e43UPDk6"
                    style="display: inline-block; padding: 10px 20px; background-color: #00b9ad; color: #ffffff; text-decoration: none; border-radius: 5px;">Isi
                    Survei</a>
            </p>
            <p style="text-align: justify;">
                Seluruh jawaban Anda akan dijaga kerahasiaannya dan hanya digunakan untuk keperluan analisis. Terima
                kasih atas dukungan dan waktu yang Anda berikan.
            </p>
            <p>Salam hormat,</p>
            <p><strong>Tim Survei Kesehatan Masyarakat</strong></p>
        </div>

        <div class="footer">
            <p>&copy; 2024 Kementrian Kesehatan. Semua Hak Dilindungi.</p>
        </div>
    </div>

</body>

</html>
`
};

const sendCampaignEmail = async (recipients) => {
    for (let recipient of recipients) {
        let emailContent = createEmailContent(recipient.name);

        let mailOptions = {
            from: 'dinas.kesehatan.survey@gmail.com',
            to: recipient.email,
            subject: 'Permintaan Partisipasi Survei Kesehatan Pasca COVID-19',
            html: emailContent
        };

        try {
            let info = await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${recipient.name}: ${info.response}`);
        } catch (error) {
            console.log(`Failed to send email to ${recipient.name}: `, error);
        }
    }
};

sendCampaignEmail(recipients_test);

