<template>
    <html lang="en">
        <head>
        <meta charset="utf-8">
        <title>Adminpro</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <!-- Favicon icon -->
        <link rel="icon" type="image/png" sizes="16x16" href="../src/assets/images/favicon.png"></head>
        <!-- Bootstrap Core CSS -->
        <link href="../src/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!-- Custom CSS -->
        <link href="../src/assets/css/style.css" rel="stylesheet">
        <!-- You can change the theme colors from here -->
        <link href="../src/assets/css/colors/default-dark.css" id="theme" rel="stylesheet">
        </head>
        <body class="fix-header card-no-border fix-sidebar">
        <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->
        <div class="preloader">
            <div class="loader">
            <div class="loader__figure"></div>
            <p class="loader__label">Admin Pro</p>
            </div>
        </div>
        <app-root></app-root>
        <!-- ============================================================== -->
        <!-- All Jquery -->
        <!-- ============================================================== -->
        <script src="../src/assets/plugins/jquery/jquery.min.js"></script>
        <!-- Bootstrap tether Core JavaScript -->
        <script src="../src/assets/plugins/bootstrap/js/popper.min.js"></script>
        <script src="../src/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        <!-- slimscrollbar scrollbar JavaScript -->
        <script src="../src/assets/js/perfect-scrollbar.jquery.min.js"></script>
        <!--Wave Effects -->
        <script src="../src/assets/js/waves.js"></script>
        <!--Menu sidebar -->
        <script src="../src/assets/js/sidebarmenu.js"></script>
        <!--stickey kit -->
        <script src="../src/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
        <script src="../src/assets/plugins/sparkline/jquery.sparkline.min.js"></script>
        <!--Custom JavaScript -->
        <script src="../src/assets/js/custom.min.js"></script>
        </body>
    </html>
</template>

<script>
export default {
  name: "Index",
};
</script>