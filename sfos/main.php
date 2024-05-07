<?php
session_start();
echo '
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <!-- bootstrap  -->
    <link rel="stylesheet" href="food-website-main/assets/css/bootstrap.min.css">
    <!-- for swiper slider  -->
    <link rel="stylesheet" href="food-website-main/assets/css/swiper-bundle.min.css">

    <!-- fancy box  -->
    <link rel="stylesheet" href="food-website-main/assets/css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="style.css">';
//เช็คว่ามีตัวแปร session อะไรบ้าง
//print_r($_SESSION);
//exit();
//สร้างเงื่อนไขตรวจสอบสิทธิ์การเข้าใช้งานจาก session
if(empty($_SESSION['id']) && empty($_SESSION['name']) && empty($_SESSION['surname'])){
            echo '<script>
                setTimeout(function() {
                swal({
                title: "คุณไม่มีสิทธิ์ใช้งานหน้านี้",
                type: "error"
                }, function() {
                window.location = "login.php"; //หน้าที่ต้องการให้กระโดดไป
                });
                }, 1000);
                </script>';
            exit();
}
?>
<body class="body-fixed">
    <!-- start of header  -->
    <header class="site-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header-logo">
                        <a href="index.html">
                            <!-- <h2 style="font-family: 'DM Serif Display'; color: #BB0E00;">Candy Castle</h5> -->
                            <img src="food-website-main/assets/images/ไม่มีชื่อ 37_20240305193114.PNG" width="160" height="36" alt="Logo">
                        </a>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="main-navigation">
                        <button class="menu-toggle"><span></span><span></span></button>
                        <nav class="header-menu">
                            <ul class="menu food-nav-menu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="menu.html">Menu</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="logout.php" onclick="return confirm('Confirm for logout?');">Logout</a></li>
                            </ul>
                        </nav>
                        <div class="header-right">
                            <!-- <form action="#" class="header-search-form for-des">
                                <input type="search" class="form-input" placeholder="Search Here...">
                                <button type="submit">
                                    <i class="uil uil-search"></i>
                                </button>
                            </form> -->
                            <a href="javascript:void(0)" class="header-btn header-cart">
                                <i class="uil uil-shopping-bag"></i>
                                <span class="cart-number">0</span>
                            </a>
                            <a href="logout.php" class="header-btn" onclick="return confirm('ยืนยันการออกจากระบบ');">
                            <i class="uil uil-user-md"></i></a>
                        </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    </header>

    <div id="viewport">
        <div id="js-scroll-content">
            <section class="main-banner" id="home">
                <div class="js-parallax-scene">
                    <div class="banner-shape-1 w-100" data-depth="0.30">
                        <img src="food-website-main/assets/images/berry.png" alt="">
                    </div>
                    <div class="banner-shape-2 w-100" data-depth="0.25">
                        <img src="food-website-main/assets/images/leaf.png" alt="">
                    </div>
                </div>
                <div class="sec-wp">
                    <div class="container">
                            <div class="col-lg-6">
                                <div class="banner-text">
                                    <h1 class="h1-title">Welcome : <?= $_SESSION['name'].' '.$_SESSION['surname'];?></h1><br>
            <h2>I hope you will find everything to your taste!!</h2>
            </div>
                        </div>
                    </div>
                </div>
            </section>
    





    <!-- jquery  -->
    <script src="food-website-main/assets/js/jquery-3.5.1.min.js"></script>
    <!-- bootstrap -->
    <script src="food-website-main/assets/js/bootstrap.min.js"></script>
    <script src="food-website-main/assets/js/popper.min.js"></script>

    <!-- fontawesome  -->
    <script src="food-website-main/assets/js/font-awesome.min.js"></script>

    <!-- swiper slider  -->
    <script src="food-website-main/assets/js/swiper-bundle.min.js"></script>

    <!-- mixitup -- filter  -->
    <script src="food-website-main/assets/js/jquery.mixitup.min.js"></script>

    <!-- fancy box  -->
    <script src="food-website-main/assets/js/jquery.fancybox.min.js"></script>

    <!-- parallax  -->
    <script src="food-website-main/assets/js/parallax.min.js"></script>

    <!-- gsap  -->
    <script src="food-website-main/assets/js/gsap.min.js"></script>

    <!-- scroll trigger  -->
    <script src="food-website-main/assets/js/ScrollTrigger.min.js"></script>
    <!-- scroll to plugin  -->
    <script src="food-website-main/assets/js/ScrollToPlugin.min.js"></script>
    <!-- rellax  -->
    <!-- <script src="assets/js/rellax.min.js"></script> -->
    <!-- <script src="assets/js/rellax-custom.js"></script> -->
    <!-- smooth scroll  -->
    <script src="food-website-main/assets/js/smooth-scroll.js"></script>
    <!-- custom js  -->
    <script src="main.js"></script>
    

</body>

</html>




<!-- <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <title>Basic Login PHP PDO by devbanban.com 2021</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12"> <br>
                </div>
                <div class="col-md-3">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            Profile
                        </a>
                        <a href="index.html" class="list-group-item list-group-item-action">Home</a>
                        <a href="about.html" class="list-group-item list-group-item-action">About</a>
                        <a href="menu.html" class="list-group-item list-group-item-action">Menu</a>
                        <a href="gallery.html" class="list-group-item list-group-item-action">Gallery</a>
                        <a href="blog.html" class="list-group-item list-group-item-action">Blog</a>
                        <a href="contact.html" class="list-group-item list-group-item-action">Contact</a>
                        <a href="logout.php" class="list-group-item list-group-item-danger" onclick="return confirm('ยืนยันการออกจากระบบ');">ออกจากระบบ</a>
                    </div>
                </div>
                <div class="col-md-9">
                    <h1 class="text-center">Main Content</h1>
                    <h5 class="text-center">สวัสดีคุณ <?= $_SESSION['name'].' '.$_SESSION['surname'];?></h5>
                    <p class="text-center">Name : <?= $_SESSION['name'];?></p>
                    <p class="text-center">Surname : <?= $_SESSION['surname']?></p>
                    <p class="text-center">Email : <?= $_SESSION['email'];?></p>
                    <p class="text-center">Password : <?= $_SESSION['password']?></p>
                    <p class="text-center">Address : <?= $_SESSION['address']?></p>
                </div>
            </div>
        </div>
        <center>Basic Login PHP PDO by devbanban.com 2021</center>
    </body>
</html> -->