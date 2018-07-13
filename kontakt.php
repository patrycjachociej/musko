<?php
session_start();
?>

<!doctype html>

<html lang="pl">
<head>
    <meta charset="utf-8">

    <title>Muśko-Team - Kontakt</title>
    <meta name="description" content="Kontakt - Muśko-Team">
    <meta name="author" content="Pracownia Kreatywna, Michał Iłenda, Patrycja Chociej">

    <link href="https://fonts.googleapis.com/css?family=Raleway:500,600,700,800|Roboto:900&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="font/flaticon.css"> 
    <link rel="stylesheet" href="style.css" type="text/css">
    <link rel='shortcut icon' type='image/png' href='img/favicon.png'/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzfiowBxGBfsSCu2slg1qLXUxLE-e3d_Q"></script>
    <script type="text/javascript" src="markerwithlabel.js"></script>
    
  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
    
</head>

<body>
  
    <nav>
        
        <a class="logo-href" href="http://musko-team.pl/" title="Strona główna"><img src="img/logo2.svg"></a>
		
		<img class="menu-mobile" src="img/menu-button.svg">
        
        <ul class="menu">
			<img class="menu-close" src="img/close-button.svg">
            <li><a href="index.html" title="Strona główna">start</a></li>
            <li class="dropdown">
                <span><a href="#uslugi">usługi</a></span>
                <div class="dropdown-content">
                    <a href="transport.html">transport</a>
                    <a href="cargo.html">magazyn</a>
                    <a href="serwis.html">serwis</a>
                </div>
            </li>
            <li><a href="o_nas.html">nasz team</a></li>
            <li><a class="active" href="kontakt.html" title="Skontaktuj się">kontakt</a></li>
        </ul>
        
    </nav>
    
    <main>
    
        
        <section id="blurred">
            <img src="img/contact_bg.jpg">
            <h1>kontakt</h1>
        </section>
        
        
        <section id="contact-info">
            
            <div class="left">
                <div>
                    <h4>Biuro i baza transportu:</h4>

                    <p><i class="flaticon-house"></i>ul. Elewatorska 11/1<br>15-620 Białystok</p>
                    <p><a href="tel:604192573"><i class="flaticon-phone-symbol-of-an-auricular-inside-a-circle"></i>604 192 573</a></p>
                    <p><a href="tel:856613090"><i class="flaticon-smartphone"></i>85 661 30 90</a></p>
                    <p><a href="mailto:biuro@musko-team.pl"><i class="flaticon-closed-envelope-circle"></i>biuro@musko-team.pl</a></p>
                </div>

                <div class="contact-blue">
                    <h4>Pełne dane firmy:</h4>

                    <p>Usługi Transportowe Muśko Marek</p>
                    <p><i class="flaticon-house"></i>ul. Wąska 15 Grabówka<br>15-523 Białystok</p>
                    <p><a href="tel:856613090"><i class="flaticon-smartphone"></i>85 661 30 90</a></p>
                    <p><a href="mailto:biuro@musko-team.pl"><i class="flaticon-closed-envelope-circle"></i>marek.musko@musko-team.pl</a></p>
                    <p>
                        <span>NIP: 9660144514</span>
                        <span>REGON: 050056898</span>
                    </p>
                </div>
            </div>
            
            <div class="right">
                <h4>Napisz do nas:</h4>
                
                <form class="contact-form" name="contact-form" method="post" action="send_form_email.php" onsubmit="return validateForm()">
                
                <input id="name" class="input-text" type="text" name="fname" placeholder="IMIĘ">
                
                <input id="email" class="input-text" type="email" name="femail"  placeholder="MAIL">
                
                <textarea id="message" class="input-text-message" name="ftextmessage" type="text" rows="9" placeholder="TREŚĆ WIADOMOŚCI"></textarea>
                
                <button class="button-blue" type="submit">Wyślij</button>
                <div class="message-sent">
                <?php 
                if ((isset($_SESSION["message_sent"])) && ($_SESSION["message_sent"] == "success"))
                {
                    ?>
                    Wiadomość wysłana!
                    <?php
                    unset($_SESSION['message_sent']); 
                }
                ?>
                </div>
            </form>
            </div>
            
        </section>
        
        
        <section id="s-map">
            
            <div class="map-photo-overlay"></div>
            <div class="map-photo-overlay"></div>
            <div class="map-photo-overlay"></div>
            <div class="map-photo-overlay"></div>
            <img class="map-photo" src="img/map_photo.jpeg">
            
            <div class="map-text-container">
                <div class="map-text">
                    <p>przewieźliśmy już</p>
                    <p class="animate-number">56468274712479456</p>
                    <p>ton ładunków</p>
                </div>
                <img class="obrys" src="img/counter_nowy2.svg">
            </div>
        
            <div id="map"></div>
            
            <div class="map-overlay"></div>
            
        </section>
        
        
        
        <section id="contact">
            
            <h3>kontakt</h3>
            <h2><a href="tel:+48604192573"><span>tel.</span> +48 604 192 573</a></h2>
            <h2><a href="mailto:biuro@musko-team.pl"><span>email:</span> biuro@musko-team.pl</span></a></h2>
            <h4>ul. Elewatorska 11/1<br>15-620 Białystok</h4>
            <button class="btn btn-crazy btn-crazy-blue button-blue btn-contact">
                <a href="kontakt.php">
                    skontaktuj się z nami
                    <img src="img/right-arrow.svg">
                </a>
            </button>
        
            
        </section>
        
        <footer>
            <span>&copy; Muśko-Team</span>
            <span>Projekt i wykonanie: <a href="http://www.pracowniakreatywna.pl/">Pracownia Kreatywna</a></span>
        </footer>
    
    </main>
    
    <script src="script.js"></script>

</body>
</html>