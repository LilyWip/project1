<?php
if (isset($_SESSION["name"])) {
  ?>
<nav class="navbar navbar-expand-lg navbar-expand-md navbar-dark" style="background-color: #FBEAEB;">
    <div class="container-fluid">
        <a class="navbar-brand text-light text-center bg-gradient bg-opacity-25 rounded-pill px-4"
            href="./" style="background-color: #bb0e00;"><span class="fa fa-user"></span> Welcome <?php echo $_SESSION["name"]; ?></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" style="color:#000;">
                <li class="nav-item" style="color:#000;">
                    <a class="nav-link active" aria-current="page" href="menu.php" style="color:#000;"><span class="fa fa-cutlery" style="color:#000;"></span>
                        Foods</a></a>
                </li>
                <li class="nav-item" style="color:#000;">
                    <a class="nav-link" href="./cart.php" style="color:#000;"><span class="fa fa-shopping-cart" style="color:#000;"></span> Cart (<?php
						if(isset($_SESSION["cart"])){
						$count = count($_SESSION["cart"]); 
						echo "$count"; 
							}
						else
							echo "0";
						?>)
						</a>
                </li>
                <li class="nav-item" style="color:#000;">
                    <a class="nav-link" href="./logout.php" style="color:#000;"><i class="fa fa-sign-out-alt" style="color:#000;"></i> Log Out</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<?php        
}
?>