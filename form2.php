<!DOCTYPE html>
<html>
<header>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/index.css">
</header>
<body>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="index.php">QB Online</a>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="index.php">Form1 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="form2.php">Form2</a>
        </li>
        </ul>
    </div>
    </nav>
    <div id="load-customer">
        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    </div>
    <div id="load-product">
        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    </div>
    <div class="container container-mt-2 container-max-8">
        <form>
            <div class="form-group row">
                <div class = "col-6">
                    <input type="text" id="" class="form-control" placeholder="Customer" required="" autofocus="">
                </div>
                <div class = "col-6">
                    <select class="form-control customer-select">
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class = "col-6">
                    <input type="text" id="" class="form-control" placeholder="Product" required="" autofocus="">
                </div>
                <div class = "col-6">
                    <select class="form-control product-select" onchange="onProductChanged()">
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class = "col-6">
                    <input type="text" id="" class="form-control" placeholder="Service Date" required="" autofocus="">
                </div>
                <div class = "col-6">
                    <input type="date" id="service-input" class="form-control" value="2017-04-16" required="" autofocus="">
                </div>
            </div>
            <div class="form-group row">
                <div class = "col-6">
                    <input type="text" id="" class="form-control" placeholder="Dispatch Type" required="" autofocus="">
                </div>
                <div class = "col-6">
                    <input type="text" id="" class="form-control" value="VPN Turn up" required="" autofocus="">
                </div>
            </div>
            <div class="form-group row">
                <div class = "col-6">
                    <input type="text" id="" class="form-control" placeholder="Internal Record ID" required="" autofocus="">
                </div>
                <div class = "col-6">
                    <input type="text" id="" class="form-control" value="38739873" required="" autofocus="">
                </div>
            </div>
            <div class="form-group row">
                <div class = "col-6">
                    <input type="text" id="" class="form-control" placeholder="FN Record ID" required="" autofocus="">
                </div>
                <div class = "col-6">
                    <input type="text" id="" class="form-control" value="1304781" required="" autofocus="">
                </div>
            </div>
            <div class="form-group row">
                <div class = "col-6">
                    <input type="text" id="" class="form-control" placeholder="Expenses" required="" autofocus="">
                </div>
                <div class = "col-6">
                    <input type="text" id="" class="form-control" value="25.00" required="" autofocus="">
                </div>
            </div>
        </form>
    </div>
</body>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <script src="./views/form2.js"></script>
    <script>
        sendReq2QB();
    </script>
</html>