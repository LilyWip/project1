<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Food Ordering System in PHP</title>

    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> -->
    <!-- jQuery -->

     <!-- Font Awesome -->
     <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- Font Awesome -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js" integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- for icons  -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <!-- for swiper slider  -->
    <link rel="stylesheet" href="/all%20copy%205/food-website-main/assets/css/swiper-bundle.min.css">

    <!-- fancy box  -->
    <link rel="stylesheet" href="/all%20copy%205/food-website-main/assets/css/jquery.fancybox.min.css">
    <!-- custom css  -->

    <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
    
        @media screen and (min-width: 992px) {
    .menu-toggle {
        display: none;
    }
}

@media (min-width: 1500px) {
    .container {
        max-width: 1368px;
    }
}

@media (min-width: 2100px) {
    .container {
        max-width: 1400px;
    }
    p, body, button, input {
        font-size: 18px;
        line-height: 32px;
    }
}

@media (max-width: 1399px) {
    .header-right {
        margin-left: 20px;
    }
    .main-navigation .menu li {
        margin: 0 3px;
    }
}

@media (max-width: 1199px) {
    .header-btn {
        margin-left: 10px;
    }
    .header-right {
        margin-left: 10px;
    }
    .main-navigation .menu li {
        margin: 0;
    }
    .main-navigation .menu li a {
        padding: 4px 15px;
        font-size: 15px;
    }
    .header-search-form .form-input {
        width: 170px;
    }
}

@media (max-width: 991px) {
    .section {
        padding-top: 85px;
        padding-bottom: 85px;
    }
    .for-des {
        display: none !important;
    }
    .for-mob {
        display: block !important;
    }
    .site-header .container {
        max-width: 100%;
        padding: 0;
        height: 100%;
    }
    .site-header .container .row {
        margin: 0;
        height: 100%;
    }
    .site-header .container .row .col-lg-2 {
        width: auto;
        padding: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 30px;
        z-index: 2;
        display: flex;
        align-items: center;
    }
    .menu-toggle {
        position: absolute;
        top: 50%;
        right: 30px;
        border: none;
        outline: none !important;
        background: transparent;
        width: 40px;
        height: 40px;
        transform: translate(0, -50%);
        z-index: 100;
        box-shadow: inset 6px 6px 7px #dadada, -6px -6px 10px #ffffff;
        border-radius: 10px;
        padding: 0 8px;
    }
    .menu-toggle span {
        display: block;
        width: 100%;
        height: 4px;
        background: #ff8243;
        margin-bottom: 5px;
        transition: 0.3s;
        border-radius: 5px;
        position: relative;
    }
    .menu-toggle span:last-child {
        margin: 0;
    }
    .toggled .menu-toggle span:nth-child(1) {
        transform: rotate(45deg);
        top: 5px;
    }
    .toggled .menu-toggle span:nth-child(2) {
        transform: rotate(-45deg);
        top: -4px;
    }
    .toggled .menu-toggle span:nth-child(3) {
        opacity: 0;
        height: 0;
    }
    .toggled .header-menu {
        transform: translateY(0);
    }
    .header-menu {
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-top: max(9vh, 30px);
        padding-left: max(6vh, 30px);
        z-index: 99;
        transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        overflow-y: auto;
        transform: translateY(-100%);
        background-image: url(assets/images/blog-pattern-bg.png);
        background-position: center;
        background-color: #f3f3f5;
    }
    .main-navigation .menu li {
        display: block;
        float: none;
        margin: 0;
        margin-bottom: max(20px, 4vh);
    }
    .main-navigation .menu li a {
        display: inline-block;
        font-size: max(16px, 2vh);
    }
    .main-navigation .menu .sub-menu {
        max-width: 220px;
        opacity: 1;
        visibility: visible;
        display: none;
    }
    .main-navigation .menu .sub-menu li {
        margin-bottom: 5px;
    }
    .main-navigation .menu li:last-child {
        margin: 0;
    }
    .main-navigation .menu .sub-menu li a {
        color: #ff8243;
    }
    .header-btn.header-cart {
        margin-right: 15px;
    }
    .header-btn {
        margin: 0;
        margin-right: 70px;
    }
    .site-header {
        padding: 20px 0;
        box-shadow: 0px 10px 55px #d4d4d4;
    }
    .site-header.sticky_head, .site-header {
        background: rgb(255 255 255 / 90%);
    }
    body {
        height: auto !important;
    }
}

@media (max-width: 575px) {
    .container, .container-fluid {
        padding: 0 30px;
    }
    .container .list{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 400px) {
    .container, .container-fluid {
        padding: 0 15px;
    }
    .header-btn {
        margin-right: 56px;
    }
    .menu-toggle {
        right: 15px;
    }
    .site-header .container .row .col-lg-2 {
        left: 15px;
    }
}

/* ************************** */

@media screen and (min-width: 992px) {
    #viewport {
        overflow: hidden;
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    #js-scroll-content {
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        left: 0;
    }
}

@media (max-width: 991px) {
    #js-scroll-content {
        transform: unset !important;
    }
}
    </style>