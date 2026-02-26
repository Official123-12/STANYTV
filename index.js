<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#00e676">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="mobile-web-app-capable" content="yes">
    
    <!-- SEO & International Meta Tags -->
    <meta name="description" content="STANY MIN TV - Premium Streaming Platform. Watch Movies, Live TV, Sports & Entertainment in HD Quality. Your Ultimate Entertainment Destination.">
    <meta name="keywords" content="streaming, movies, live tv, sports, entertainment, HD, premium, watch online">
    <meta name="author" content="STANY MIN TV">
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <meta name="revisit-after" content="1 days">
    <meta name="rating" content="general">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://stanymintv.com/">
    <meta property="og:title" content="STANY MIN TV - Premium Streaming Platform">
    <meta property="og:description" content="Watch Movies, Live TV, Sports & Entertainment in HD Quality. Join thousands of satisfied users worldwide.">
    <meta property="og:image" content="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="STANY MIN TV">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://stanymintv.com/">
    <meta property="twitter:title" content="STANY MIN TV - Premium Streaming Platform">
    <meta property="twitter:description" content="Watch Movies, Live TV, Sports & Entertainment in HD Quality.">
    <meta property="twitter:image" content="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg">
    
    <!-- Additional Meta Tags -->
    <meta name="application-name" content="STANY MIN TV">
    <meta name="msapplication-TileColor" content="#00e676">
    <meta name="msapplication-config" content="browserconfig.xml">
    
    <title>STANY MIN TV - Premium Streaming Platform | Watch Movies & Live TV</title>
    
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg">
    <link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg">
    <link rel="icon" type="image/png" sizes="16x16" href="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg">
    
    <!-- Preconnect for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://www.gstatic.com">
    
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database-compat.js"></script>
    
    <!-- Enhanced Video Player -->
    <link href="https://unpkg.com/video.js@7.21.1/dist/video-js.min.css" rel="stylesheet">
    <script src="https://unpkg.com/video.js@7.21.1/dist/video.min.js"></script>
    <script src="https://unpkg.com/@videojs/http-streaming@2.14.2/dist/videojs-http-streaming.min.js"></script>
    <script src="https://unpkg.com/videojs-contrib-quality-levels@2.0.9/dist/videojs-contrib-quality-levels.min.js"></script>
    
    <style>
        :root {
            --primary-neon: #00e676;
            --secondary-neon: #00bcd4;
            --accent-neon: #ff00ff;
            --dark-bg: #0a0a0f;
            --darker-bg: #050508;
            --card-bg: rgba(26, 26, 46, 0.95);
            --text-color: #e0e0e0;
            --light-text: #ffffff;
            --gradient-start: #0a0a0f;
            --gradient-end: #1a1a2e;
            --hover-glow: 0 0 20px rgba(0, 230, 118, 0.6), 0 0 40px rgba(0, 188, 212, 0.4);
            --success-color: #4CAF50;
            --error-color: #f44336;
            --warning-color: #FF9800;
            --info-color: #2196F3;
            --premium-gold: #FFD700;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
            color: var(--text-color);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
            position: relative;
        }

        /* Premium Loading Screen - Netflix Style */
        #loadingScreen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.8s ease, visibility 0.8s;
        }

        #loadingScreen.hidden {
            opacity: 0;
            visibility: hidden;
        }

        .loading-logo-container {
            position: relative;
            width: 200px;
            height: 200px;
            margin-bottom: 40px;
        }

        .loading-logo {
            width: 100%;
            height: 100%;
            object-fit: contain;
            animation: logoPulse 2s ease-in-out infinite, logoRotate 20s linear infinite;
            filter: drop-shadow(0 0 30px rgba(0, 230, 118, 0.8));
            border-radius: 50%;
        }

        .loading-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 250px;
            height: 250px;
            border: 3px solid transparent;
            border-top-color: var(--primary-neon);
            border-right-color: var(--secondary-neon);
            border-radius: 50%;
            animation: ringSpin 1.5s linear infinite;
        }

        .loading-ring::before {
            content: '';
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border: 3px solid transparent;
            border-top-color: var(--secondary-neon);
            border-right-color: var(--primary-neon);
            border-radius: 50%;
            animation: ringSpin 2s linear infinite reverse;
        }

        .loading-ring::after {
            content: '';
            position: absolute;
            top: 30px;
            left: 30px;
            right: 30px;
            bottom: 30px;
            border: 3px solid transparent;
            border-top-color: var(--accent-neon);
            border-right-color: var(--secondary-neon);
            border-radius: 50%;
            animation: ringSpin 1s linear infinite;
        }

        @keyframes logoPulse {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 30px rgba(0, 230, 118, 0.8)); }
            50% { transform: scale(1.05); filter: drop-shadow(0 0 50px rgba(0, 230, 118, 1)); }
        }

        @keyframes logoRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes ringSpin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .loading-text {
            font-family: 'Orbitron', sans-serif;
            font-size: 2em;
            font-weight: 700;
            color: var(--primary-neon);
            text-transform: uppercase;
            letter-spacing: 8px;
            margin-bottom: 20px;
            animation: textGlow 2s ease-in-out infinite;
            text-shadow: 0 0 20px rgba(0, 230, 118, 0.8);
        }

        @keyframes textGlow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        .loading-bar-container {
            width: 300px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            position: relative;
        }

        .loading-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--primary-neon), var(--secondary-neon), var(--accent-neon));
            border-radius: 2px;
            animation: loadingProgress 2s ease-in-out infinite;
            box-shadow: 0 0 20px rgba(0, 230, 118, 0.8);
        }

        @keyframes loadingProgress {
            0% { width: 0%; margin-left: 0%; }
            50% { width: 100%; margin-left: 0%; }
            100% { width: 0%; margin-left: 100%; }
        }

        .loading-status {
            margin-top: 20px;
            font-size: 0.9em;
            color: var(--secondary-neon);
            letter-spacing: 2px;
            animation: fadeInOut 2s ease-in-out infinite;
        }

        @keyframes fadeInOut {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
        }

        /* Privacy Policy & Disclaimer Modal */
        #privacyModal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 9999;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(10px);
        }

        .privacy-content {
            background: linear-gradient(135deg, var(--card-bg), rgba(26, 26, 46, 0.98));
            max-width: 800px;
            width: 90%;
            max-height: 80vh;
            border-radius: 20px;
            border: 2px solid var(--primary-neon);
            box-shadow: var(--hover-glow), 0 20px 60px rgba(0, 0, 0, 0.8);
            overflow: hidden;
            animation: modalSlideIn 0.5s ease;
        }

        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .privacy-header {
            background: linear-gradient(135deg, var(--primary-neon), var(--secondary-neon));
            padding: 25px;
            text-align: center;
        }

        .privacy-header h2 {
            font-family: 'Orbitron', sans-serif;
            color: var(--dark-bg);
            font-size: 1.8em;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
        }

        .privacy-body {
            padding: 30px;
            overflow-y: auto;
            max-height: 50vh;
            line-height: 1.8;
        }

        .privacy-body h3 {
            color: var(--primary-neon);
            margin: 20px 0 10px 0;
            font-size: 1.3em;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .privacy-body h3 i {
            color: var(--secondary-neon);
        }

        .privacy-body p, .privacy-body ul {
            margin-bottom: 15px;
            color: var(--text-color);
            font-size: 0.95em;
        }

        .privacy-body ul {
            padding-left: 25px;
        }

        .privacy-body li {
            margin-bottom: 8px;
        }

        .privacy-footer {
            padding: 25px;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-accept {
            background: linear-gradient(135deg, var(--success-color), #66BB6A);
            color: white;
            padding: 15px 40px;
            border: none;
            border-radius: 50px;
            font-size: 1.1em;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 0 5px 20px rgba(76, 175, 80, 0.4);
        }

        .btn-accept:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(76, 175, 80, 0.6);
        }

        .btn-decline {
            background: linear-gradient(135deg, var(--error-color), #EF5350);
            color: white;
            padding: 15px 40px;
            border: none;
            border-radius: 50px;
            font-size: 1.1em;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 0 5px 20px rgba(244, 67, 54, 0.4);
        }

        .btn-decline:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(244, 67, 54, 0.6);
        }

        .checkbox-container {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .checkbox-container input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
            accent-color: var(--primary-neon);
        }

        .checkbox-container label {
            color: var(--text-color);
            cursor: pointer;
            font-weight: 600;
        }

        /* Rest of existing styles with enhancements */
        #loadingSpinner {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9998;
            transition: opacity 0.3s ease;
        }

        .spinner {
            border: 8px solid rgba(0, 230, 118, 0.1);
            border-top: 8px solid var(--primary-neon);
            border-right: 8px solid var(--secondary-neon);
            border-radius: 50%;
            width: 70px;
            height: 70px;
            animation: spin 1s linear infinite;
            box-shadow: 0 0 30px rgba(0, 230, 118, 0.5);
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Authentication Pages - Enhanced */
        .auth-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            padding: 20px;
        }

        .auth-box {
            background: linear-gradient(135deg, rgba(26, 26, 46, 0.98), rgba(10, 10, 15, 0.98));
            padding: 50px 40px;
            border-radius: 25px;
            box-shadow: var(--hover-glow), 0 20px 60px rgba(0, 0, 0, 0.8);
            width: 450px;
            max-width: 95%;
            text-align: center;
            border: 2px solid rgba(0, 230, 118, 0.3);
            backdrop-filter: blur(20px);
            animation: authBoxFadeIn 0.6s ease;
        }

        @keyframes authBoxFadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .auth-box .logo {
            width: 120px;
            height: 120px;
            margin: 0 auto 25px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--primary-neon);
            box-shadow: 0 0 40px rgba(0, 230, 118, 0.6);
            animation: logoFloat 3s ease-in-out infinite;
        }

        @keyframes logoFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .auth-box h2 {
            font-family: 'Orbitron', sans-serif;
            color: var(--primary-neon);
            margin-bottom: 10px;
            font-size: 2.2em;
            text-shadow: var(--hover-glow);
            letter-spacing: 3px;
        }

        .auth-box .subtitle {
            color: var(--secondary-neon);
            font-size: 0.95em;
            margin-bottom: 35px;
            letter-spacing: 2px;
        }

        .form-group {
            margin-bottom: 20px;
            text-align: left;
            position: relative;
        }

        .form-group label {
            display: block;
            margin-bottom: 10px;
            color: var(--text-color);
            font-weight: 600;
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .form-group i {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--secondary-neon);
            z-index: 1;
        }

        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="password"],
        .form-group input[type="date"],
        .form-group select {
            width: 100%;
            padding: 15px 15px 15px 45px;
            border-radius: 12px;
            border: 2px solid rgba(0, 230, 118, 0.2);
            background-color: rgba(44, 58, 90, 0.6);
            color: var(--light-text);
            font-size: 1em;
            outline: none;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
            border-color: var(--primary-neon);
            box-shadow: 0 0 20px rgba(0, 230, 118, 0.3);
            background-color: rgba(44, 58, 90, 0.8);
        }

        .form-group select {
            appearance: none;
            background-image: url("image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300e676' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 15px center;
            background-size: 16px;
            padding-right: 45px;
        }

        .btn {
            background: linear-gradient(135deg, var(--primary-neon), var(--secondary-neon));
            color: var(--dark-bg);
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: 700;
            transition: all 0.3s ease;
            margin-top: 15px;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 0 5px 20px rgba(0, 230, 118, 0.4);
            position: relative;
            overflow: hidden;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            transition: left 0.5s;
        }

        .btn:hover::before {
            left: 100%;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: var(--hover-glow);
        }

        .btn:active {
            transform: translateY(-1px);
        }

        .btn-success {
            background: linear-gradient(135deg, var(--success-color), #66BB6A);
            box-shadow: 0 5px 20px rgba(76, 175, 80, 0.4);
        }

        .btn-error {
            background: linear-gradient(135deg, var(--error-color), #EF5350);
            box-shadow: 0 5px 20px rgba(244, 67, 54, 0.4);
        }

        .btn-warning {
            background: linear-gradient(135deg, var(--warning-color), #FFB74D);
            box-shadow: 0 5px 20px rgba(255, 152, 0, 0.4);
        }

        .btn-info {
            background: linear-gradient(135deg, var(--info-color), #42A5F5);
            box-shadow: 0 5px 20px rgba(33, 150, 243, 0.4);
        }

        .auth-box .btn {
            width: 100%;
            padding: 18px;
            font-size: 1.2em;
            margin-top: 25px;
        }

        .auth-links {
            margin-top: 25px;
            font-size: 0.9em;
        }

        .auth-links a {
            color: var(--secondary-neon);
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
            margin: 5px 0;
            position: relative;
        }

        .auth-links a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-neon);
            transition: width 0.3s ease;
        }

        .auth-links a:hover {
            color: var(--primary-neon);
        }

        .auth-links a:hover::after {
            width: 100%;
        }

        .divider {
            margin: 25px 0;
            position: relative;
            text-align: center;
        }

        .divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.5), transparent);
        }

        .divider span {
            background: var(--card-bg);
            padding: 0 15px;
            color: var(--secondary-neon);
            position: relative;
            font-size: 0.85em;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Main App Layout */
        #appContainer {
            display: none;
            flex-direction: column;
            flex: 1;
        }

        /* Blocked User Overlay */
        #blockedOverlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.98);
            z-index: 9998;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            padding: 20px;
            backdrop-filter: blur(10px);
        }

        .blocked-content {
            background: linear-gradient(135deg, var(--card-bg), rgba(26, 26, 46, 0.98));
            padding: 50px;
            border-radius: 25px;
            box-shadow: var(--hover-glow), 0 20px 60px rgba(0, 0, 0, 0.8);
            border: 3px solid var(--error-color);
            max-width: 500px;
            width: 90%;
            animation: shake 0.5s ease;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }

        .blocked-content i {
            font-size: 5em;
            color: var(--error-color);
            margin-bottom: 20px;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .blocked-content h2 {
            color: var(--error-color);
            font-size: 2.2em;
            margin-bottom: 20px;
            text-shadow: 0 0 20px var(--error-color);
            font-family: 'Orbitron', sans-serif;
        }

        .blocked-content p {
            margin-bottom: 25px;
            font-size: 1.1em;
            line-height: 1.6;
        }

        /* Header - Enhanced */
        .app-header {
            background: linear-gradient(135deg, rgba(26, 26, 46, 0.98), rgba(10, 10, 15, 0.98));
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
            border-bottom: 2px solid rgba(0, 230, 118, 0.2);
            position: sticky;
            top: 0;
            z-index: 1000;
            backdrop-filter: blur(20px);
        }

        .app-header .logo {
            font-family: 'Orbitron', sans-serif;
            color: var(--primary-neon);
            font-size: 1.8em;
            text-decoration: none;
            text-shadow: var(--hover-glow);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 800;
            letter-spacing: 2px;
        }

        .app-header .logo img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 2px solid var(--primary-neon);
        }

        .app-header .logo:hover {
            transform: scale(1.05);
        }

        .search-bar {
            display: flex;
            align-items: center;
            flex-grow: 1;
            max-width: 500px;
            margin: 0 30px;
            position: relative;
        }

        .search-bar i {
            position: absolute;
            left: 20px;
            color: var(--secondary-neon);
            z-index: 1;
        }

        .search-bar input {
            width: 100%;
            padding: 12px 20px 12px 50px;
            border-radius: 50px;
            border: 2px solid rgba(0, 230, 118, 0.3);
            background-color: rgba(44, 58, 90, 0.6);
            color: var(--light-text);
            font-size: 1em;
            outline: none;
            transition: all 0.3s ease;
        }

        .search-bar input:focus {
            border-color: var(--secondary-neon);
            box-shadow: 0 0 20px rgba(0, 188, 212, 0.5);
            background-color: rgba(44, 58, 90, 0.8);
        }

        .header-actions {
            display: flex;
            gap: 15px;
            align-items: center;
        }

        .header-btn {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: rgba(0, 230, 118, 0.1);
            border: 2px solid var(--primary-neon);
            color: var(--primary-neon);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1.2em;
        }

        .header-btn:hover {
            background: var(--primary-neon);
            color: var(--dark-bg);
            transform: rotate(15deg) scale(1.1);
            box-shadow: var(--hover-glow);
        }

        /* Category Filter - Enhanced */
        .category-filter {
            padding: 20px 30px;
            background: linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(10, 10, 15, 0.8));
            box-shadow: inset 0 -5px 15px rgba(0, 0, 0, 0.3);
            white-space: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            border-bottom: 1px solid rgba(0, 230, 118, 0.1);
        }

        .category-filter::-webkit-scrollbar {
            display: none;
        }

        .category-filter button {
            background: rgba(0, 230, 118, 0.1);
            color: var(--primary-neon);
            border: 2px solid var(--primary-neon);
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 0.9em;
            margin-right: 12px;
            transition: all 0.3s ease;
            white-space: nowrap;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .category-filter button:hover {
            background: var(--primary-neon);
            color: var(--dark-bg);
            box-shadow: 0 0 20px var(--primary-neon);
            transform: translateY(-3px);
        }

        .category-filter button.active {
            background: linear-gradient(135deg, var(--primary-neon), var(--secondary-neon));
            color: var(--dark-bg);
            border-color: var(--secondary-neon);
            box-shadow: var(--hover-glow);
            transform: scale(1.05);
        }

        /* Content Sections */
        .content-area {
            flex: 1;
            padding: 30px;
            overflow-y: auto;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 2px solid rgba(0, 230, 118, 0.2);
        }

        .section-header h3 {
            font-family: 'Orbitron', sans-serif;
            color: var(--secondary-neon);
            font-size: 2em;
            text-shadow: 0 0 15px var(--secondary-neon);
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 700;
        }

        .section-header h3 i {
            color: var(--primary-neon);
        }

        .view-all {
            color: var(--primary-neon);
            text-decoration: none;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }

        .view-all:hover {
            color: var(--secondary-neon);
            gap: 12px;
        }

        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 30px;
        }

        .movie-card, .channel-card {
            background: linear-gradient(135deg, var(--card-bg), rgba(26, 26, 46, 0.95));
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 2px solid rgba(0, 230, 118, 0.1);
            cursor: pointer;
            position: relative;
        }

        .movie-card:hover, .channel-card:hover {
            transform: translateY(-15px) scale(1.03);
            box-shadow: var(--hover-glow);
            border-color: var(--primary-neon);
        }

        .movie-card img, .channel-card img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            display: block;
            border-bottom: 2px solid rgba(0, 230, 118, 0.2);
            transition: all 0.3s ease;
        }

        .movie-card:hover img, .channel-card:hover img {
            filter: brightness(1.1);
        }

        .movie-card-badge, .channel-card-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: linear-gradient(135deg, var(--premium-gold), #FFA000);
            color: var(--dark-bg);
            padding: 5px 12px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.8em;
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
            z-index: 2;
        }

        .movie-card-info, .channel-card-info {
            padding: 20px;
            text-align: center;
        }

        .movie-card-info h4, .channel-card-info h4 {
            color: var(--light-text);
            font-size: 1.2em;
            margin-bottom: 8px;
            font-weight: 700;
        }

        .movie-card-info p, .channel-card-info p {
            font-size: 0.9em;
            color: var(--text-color);
        }

        .movie-card-info .rating {
            color: var(--premium-gold);
            font-weight: 700;
        }

        .channel-card .play-icon, .channel-card .favorite-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3.5em;
            color: rgba(0, 230, 118, 0.9);
            text-shadow: 0 0 20px var(--primary-neon);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 2;
        }

        .channel-card:hover .play-icon {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
        }

        .channel-card .favorite-icon {
            top: 15px;
            right: 15px;
            transform: none;
            font-size: 1.8em;
            color: rgba(255, 255, 255, 0.5);
            text-shadow: none;
            opacity: 1;
            cursor: pointer;
            left: auto;
        }

        .channel-card .favorite-icon.favorited {
            color: var(--premium-gold);
            text-shadow: 0 0 10px var(--premium-gold);
        }

        /* Modals - Enhanced */
        .modal-overlay {
            display: none;
            position: fixed;
            z-index: 3000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .modal-content {
            background: linear-gradient(135deg, var(--card-bg), rgba(26, 26, 46, 0.98));
            margin: auto;
            padding: 40px;
            border-radius: 25px;
            box-shadow: var(--hover-glow), 0 20px 60px rgba(0, 0, 0, 0.8);
            width: 90%;
            max-width: 900px;
            position: relative;
            border: 2px solid rgba(0, 230, 118, 0.3);
            display: flex;
            flex-direction: column;
            animation: modalSlideIn 0.5s ease;
        }

        .close-button {
            color: var(--text-color);
            font-size: 35px;
            font-weight: bold;
            position: absolute;
            top: 20px;
            right: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.3);
        }

        .close-button:hover {
            color: var(--primary-neon);
            background: rgba(0, 230, 118, 0.2);
            transform: rotate(90deg);
        }

        .modal-body {
            display: flex;
            gap: 30px;
            align-items: flex-start;
            margin-top: 20px;
        }

        .modal-poster {
            flex-shrink: 0;
            width: 280px;
            height: 400px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
            border: 3px solid rgba(0, 230, 118, 0.3);
        }

        .modal-info {
            flex-grow: 1;
        }

        .modal-info h2 {
            font-family: 'Orbitron', sans-serif;
            color: var(--primary-neon);
            margin-bottom: 15px;
            text-shadow: var(--hover-glow);
            font-size: 2.2em;
            font-weight: 800;
        }

        .modal-info p {
            margin-bottom: 12px;
            line-height: 1.8;
            font-size: 1em;
        }

        .modal-info .meta-info {
            display: flex;
            gap: 20px;
            margin: 20px 0;
            flex-wrap: wrap;
        }

        .modal-info .meta-item {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(0, 230, 118, 0.1);
            padding: 8px 15px;
            border-radius: 20px;
            border: 1px solid rgba(0, 230, 118, 0.2);
        }

        .modal-info .meta-item i {
            color: var(--secondary-neon);
        }

        .modal-actions {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
        }

        .watch-btn {
            background: linear-gradient(135deg, var(--primary-neon), var(--secondary-neon));
            color: var(--dark-bg);
            padding: 15px 35px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: 700;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 0 5px 20px rgba(0, 230, 118, 0.4);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .watch-btn:hover {
            transform: translateY(-3px);
            box-shadow: var(--hover-glow);
        }

        /* Video Player Modal - Premium */
        .player-modal {
            display: none;
            position: fixed;
            z-index: 4000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background: rgba(0, 0, 0, 0.98);
            backdrop-filter: blur(20px);
            justify-content: center;
            align-items: center;
        }

        .player-modal-content {
            position: relative;
            width: 95%;
            max-width: 1400px;
            aspect-ratio: 16/9;
            background: #000;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--hover-glow), 0 30px 80px rgba(0, 0, 0, 0.9);
            border: 3px solid rgba(0, 230, 118, 0.3);
        }

        .player-close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            color: var(--light-text);
            font-size: 40px;
            cursor: pointer;
            z-index: 4001;
            transition: all 0.3s ease;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid var(--primary-neon);
        }

        .player-close-button:hover {
            color: var(--primary-neon);
            background: rgba(0, 0, 0, 0.95);
            transform: rotate(90deg) scale(1.1);
            box-shadow: 0 0 30px var(--primary-neon);
        }

        #enhanced-video-player {
            width: 100%;
            height: 100%;
        }

        .vjs-theme-custom {
            --vjs-theme-custom--primary: var(--primary-neon);
            --vjs-theme-custom--secondary: var(--secondary-neon);
        }

        .vjs-theme-custom .vjs-control-bar {
            background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
            height: 5em;
        }

        .vjs-theme-custom .vjs-button:hover {
            color: var(--primary-neon);
        }

        .vjs-theme-custom .vjs-play-progress,
        .vjs-theme-custom .vjs-volume-level {
            background: linear-gradient(90deg, var(--primary-neon), var(--secondary-neon));
        }

        .vjs-theme-custom .vjs-big-play-button {
            background: linear-gradient(135deg, var(--primary-neon), var(--secondary-neon));
            border: none;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            line-height: 100px;
            font-size: 3em;
            transition: all 0.3s ease;
            box-shadow: 0 0 40px rgba(0, 230, 118, 0.6);
        }

        .vjs-theme-custom .vjs-big-play-button:hover {
            transform: scale(1.15);
            box-shadow: var(--hover-glow);
        }

        /* Bottom Navigation - Premium */
        .bottom-nav {
            background: linear-gradient(135deg, rgba(26, 26, 46, 0.98), rgba(10, 10, 15, 0.98));
            padding: 15px 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.5);
            border-top: 2px solid rgba(0, 230, 118, 0.2);
            position: sticky;
            bottom: 0;
            z-index: 1000;
            backdrop-filter: blur(20px);
        }

        .nav-item {
            color: var(--text-color);
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 20px;
            border-radius: 15px;
            transition: all 0.3s ease;
            min-width: 80px;
            position: relative;
        }

        .nav-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-neon), var(--secondary-neon));
            transition: width 0.3s ease;
            border-radius: 0 0 10px 10px;
        }

        .nav-item:hover::before,
        .nav-item.active::before {
            width: 80%;
        }

        .nav-item i {
            font-size: 1.8em;
            margin-bottom: 5px;
            transition: all 0.3s ease;
        }

        .nav-item span {
            font-size: 0.85em;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .nav-item:hover {
            background: rgba(0, 230, 118, 0.1);
            color: var(--primary-neon);
            transform: translateY(-5px);
        }

        .nav-item.active {
            color: var(--primary-neon);
            text-shadow: 0 0 10px var(--primary-neon);
            transform: translateY(-5px);
        }

        .nav-item.active i {
            color: var(--primary-neon);
            animation: navIconPulse 1.5s ease-in-out infinite;
        }

        @keyframes navIconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }

        /* Floating WhatsApp Button */
        .whatsapp-float {
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: linear-gradient(135deg, #25D366, #128C7E);
            color: white;
            width: 65px;
            height: 65px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.2em;
            box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);
            z-index: 999;
            transition: all 0.3s ease;
            border: 3px solid rgba(255, 255, 255, 0.2);
            animation: whatsappPulse 2s ease-in-out infinite;
        }

        @keyframes whatsappPulse {
            0%, 100% { transform: scale(1); box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5); }
            50% { transform: scale(1.1); box-shadow: 0 12px 40px rgba(37, 211, 102, 0.7); }
        }

        .whatsapp-float:hover {
            transform: scale(1.15) rotate(10deg);
            box-shadow: 0 12px 40px rgba(37, 211, 102, 0.7);
        }

        /* Toast Notifications - Enhanced */
        #toastContainer {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 5000;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .toast {
            background: linear-gradient(135deg, var(--card-bg), rgba(26, 26, 46, 0.98));
            color: white;
            padding: 18px 25px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            min-width: 300px;
            max-width: 400px;
            opacity: 0;
            transform: translateX(100px);
            animation: toastSlideIn 0.5s forwards, toastSlideOut 0.5s 3.5s forwards;
            display: flex;
            align-items: center;
            gap: 15px;
            border-left: 5px solid;
            backdrop-filter: blur(10px);
        }

        @keyframes toastSlideIn {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }

        @keyframes toastSlideOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100px); }
        }

        .toast.success { border-color: var(--success-color); }
        .toast.error { border-color: var(--error-color); }
        .toast.warning { border-color: var(--warning-color); }
        .toast.info { border-color: var(--info-color); }

        .toast i {
            font-size: 1.5em;
        }

        .toast.success i { color: var(--success-color); }
        .toast.error i { color: var(--error-color); }
        .toast.warning i { color: var(--warning-color); }
        .toast.info i { color: var(--info-color); }

        /* Responsive Design */
        @media (max-width: 768px) {
            .loading-logo-container {
                width: 150px;
                height: 150px;
            }
            
            .loading-text {
                font-size: 1.5em;
                letter-spacing: 5px;
            }
            
            .loading-bar-container {
                width: 250px;
            }
            
            .auth-box {
                padding: 40px 25px;
            }
            
            .app-header {
                padding: 15px 20px;
                flex-wrap: wrap;
            }
            
            .app-header .logo {
                font-size: 1.4em;
                width: 100%;
                justify-content: center;
                margin-bottom: 10px;
            }
            
            .search-bar {
                width: 100%;
                margin: 0 0 10px 0;
                order: 3;
            }
            
            .content-area {
                padding: 20px;
            }
            
            .content-grid {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 20px;
            }
            
            .modal-body {
                flex-direction: column;
                align-items: center;
            }
            
            .modal-poster {
                width: 200px;
                height: 300px;
            }
            
            .modal-info h2 {
                font-size: 1.6em;
                text-align: center;
            }
            
            .bottom-nav {
                padding: 10px 0;
            }
            
            .nav-item {
                min-width: 60px;
                padding: 8px 12px;
            }
            
            .nav-item i {
                font-size: 1.5em;
            }
            
            .nav-item span {
                font-size: 0.7em;
            }
            
            .whatsapp-float {
                bottom: 90px;
                right: 20px;
                width: 55px;
                height: 55px;
                font-size: 1.8em;
            }
        }

        @media (max-width: 480px) {
            .content-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .movie-card img, .channel-card img {
                height: 200px;
            }
            
            .section-header h3 {
                font-size: 1.5em;
            }
        }

        /* Premium Badge */
        .premium-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background: linear-gradient(135deg, var(--premium-gold), #FFA000);
            color: var(--dark-bg);
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: 800;
            font-size: 0.75em;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.5);
            z-index: 3;
            animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        /* Skeleton Loading */
        .skeleton {
            background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s infinite;
            border-radius: 10px;
        }

        @keyframes skeleton-loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        ::-webkit-scrollbar-track {
            background: var(--dark-bg);
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, var(--primary-neon), var(--secondary-neon));
            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, var(--secondary-neon), var(--primary-neon));
        }

        /* Selection Color */
        ::selection {
            background: var(--primary-neon);
            color: var(--dark-bg);
        }
    </style>
</head>
<body>
    <!-- Premium Loading Screen -->
    <div id="loadingScreen">
        <div class="loading-logo-container">
            <div class="loading-ring"></div>
            <img src="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg" alt="STANY MIN TV" class="loading-logo">
        </div>
        <div class="loading-text">STANY MIN TV</div>
        <div class="loading-bar-container">
            <div class="loading-bar"></div>
        </div>
        <div class="loading-status">Loading Premium Content...</div>
    </div>

    <!-- Privacy Policy & Disclaimer Modal -->
    <div id="privacyModal">
        <div class="privacy-content">
            <div class="privacy-header">
                <h2><i class="fas fa-shield-alt"></i> Privacy Policy & Terms</h2>
            </div>
            <div class="privacy-body">
                <h3><i class="fas fa-user-shield"></i> Privacy Policy</h3>
                <p>Welcome to STANY MIN TV. We are committed to protecting your privacy and ensuring you have a positive experience when using our streaming platform.</p>
                
                <h3><i class="fas fa-info-circle"></i> Information We Collect</h3>
                <ul>
                    <li>Personal information (name, email address) when you create an account</li>
                    <li>Device information and usage data to improve our service</li>
                    <li>Viewing history and preferences to personalize your experience</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                </ul>

                <h3><i class="fas fa-lock"></i> How We Use Your Information</h3>
                <ul>
                    <li>To provide and maintain our streaming service</li>
                    <li>To notify you about changes to our service</li>
                    <li>To provide customer support</li>
                    <li>To detect, prevent and address technical issues</li>
                    <li>To send you updates, security alerts, and support messages</li>
                </ul>

                <h3><i class="fas fa-exclamation-triangle"></i> Disclaimer</h3>
                <p><strong>Important Notice:</strong></p>
                <ul>
                    <li>STANY MIN TV provides streaming services for educational and entertainment purposes</li>
                    <li>We do not host any content on our servers. All content is streamed from third-party sources</li>
                    <li>Users are responsible for complying with their local laws and regulations regarding streaming content</li>
                    <li>We are not responsible for any copyrighted material viewed through our platform</li>
                    <li>Service availability depends on internet connectivity and third-party server status</li>
                    <li>We reserve the right to modify, suspend, or discontinue any part of the service at any time</li>
                    <li>Premium subscriptions are non-refundable except as required by law</li>
                </ul>

                <h3><i class="fas fa-gavel"></i> Terms of Service</h3>
                <ul>
                    <li>You must be 18 years or older to use this service</li>
                    <li>You agree not to share your account credentials with others</li>
                    <li>Commercial use of this service is strictly prohibited</li>
                    <li>We reserve the right to terminate accounts that violate our terms</li>
                    <li>By using this service, you agree to receive service-related notifications</li>
                </ul>

                <h3><i class="fas fa-envelope"></i> Contact Us</h3>
                <p>If you have any questions about this Privacy Policy or Terms of Service, please contact us through our WhatsApp support channel.</p>
            </div>
            <div class="privacy-footer">
                <div class="checkbox-container">
                    <input type="checkbox" id="acceptTerms">
                    <label for="acceptTerms">I have read and accept the Privacy Policy and Terms of Service</label>
                </div>
                <button class="btn-accept" id="acceptBtn" disabled>
                    <i class="fas fa-check"></i> Accept & Continue
                </button>
                <button class="btn-decline" id="declineBtn">
                    <i class="fas fa-times"></i> Decline
                </button>
            </div>
        </div>
    </div>

    <!-- Regular Loading Spinner -->
    <div id="loadingSpinner" style="display: none;">
        <div class="spinner"></div>
    </div>

    <!-- Blocked User Overlay -->
    <div id="blockedOverlay">
        <div class="blocked-content">
            <i class="fas fa-ban"></i>
            <h2>Account Blocked</h2>
            <p>Your account has been blocked or your access period has expired.</p>
            <p>Please contact our support team for assistance.</p>
            <button class="btn btn-warning" onclick="contactAdmin()">
                <i class="fab fa-whatsapp"></i> Contact Support
            </button>
        </div>
    </div>

    <!-- User Authentication Pages -->
    <div class="auth-container" id="authPages" style="display: none;">
        <!-- Login Page -->
        <div class="auth-box" id="loginPage">
            <img src="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg" alt="Logo" class="logo">
            <h2>STANY MIN TV</h2>
            <p class="subtitle">Premium Streaming Platform</p>
            
            <div class="form-group">
                <label for="loginEmail"><i class="fas fa-envelope"></i> Email Address</label>
                <input type="email" id="loginEmail" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="loginPassword"><i class="fas fa-lock"></i> Password</label>
                <input type="password" id="loginPassword" placeholder="Enter your password" required>
            </div>
            <button class="btn" id="loginBtn">
                <i class="fas fa-sign-in-alt"></i> Login
            </button>
            <div class="divider"><span>OR</span></div>
            <div class="auth-links">
                <a href="#" id="showRegisterLink"><i class="fas fa-user-plus"></i> Create Account</a><br>
                <a href="#" id="showForgotPasswordLink"><i class="fas fa-key"></i> Forgot Password?</a>
            </div>
        </div>

        <!-- Register Page -->
        <div class="auth-box" id="registerPage" style="display: none;">
            <img src="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg" alt="Logo" class="logo">
            <h2>Create Account</h2>
            <p class="subtitle>Join Premium Streaming</p>
            
            <div class="form-group">
                <label for="registerName"><i class="fas fa-user"></i> Full Name</label>
                <input type="text" id="registerName" placeholder="Enter your full name" required>
            </div>
            <div class="form-group">
                <label for="registerEmail"><i class="fas fa-envelope"></i> Email Address</label>
                <input type="email" id="registerEmail" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="registerPassword"><i class="fas fa-lock"></i> Password</label>
                <input type="password" id="registerPassword" placeholder="Create a password (min 6 characters)" required>
            </div>
            <button class="btn" id="registerBtn">
                <i class="fas fa-user-plus"></i> Register
            </button>
            <div class="auth-links">
                <a href="#" id="showLoginLinkFromRegister"><i class="fas fa-sign-in-alt"></i> Already have an account? Login</a>
            </div>
        </div>

        <!-- Forgot Password Page -->
        <div class="auth-box" id="forgotPasswordPage" style="display: none;">
            <img src="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg" alt="Logo" class="logo">
            <h2>Reset Password</h2>
            <p class="subtitle>Recover Your Account</p>
            
            <div class="form-group">
                <label for="forgotEmail"><i class="fas fa-envelope"></i> Email Address</label>
                <input type="email" id="forgotEmail" placeholder="Enter your email" required>
            </div>
            <button class="btn" id="resetPasswordBtn">
                <i class="fas fa-paper-plane"></i> Send Reset Link
            </button>
            <div class="auth-links">
                <a href="#" id="showLoginLinkFromForgot"><i class="fas fa-arrow-left"></i> Back to Login</a>
            </div>
        </div>
    </div>

    <!-- Main App Container -->
    <div id="appContainer">
        <!-- Header -->
        <header class="app-header">
            <a href="#" class="logo">
                <img src="https://raw.githubusercontent.com/Official123-12/STANYFREEBOT-/refs/heads/main/IMG_1637.jpeg" alt="Logo">
                STANY MIN TV
            </a>
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" placeholder="Search movies, channels..." />
            </div>
            <div class="header-actions">
                <div class="header-btn" title="Notifications">
                    <i class="fas fa-bell"></i>
                </div>
                <div class="header-btn" title="Settings">
                    <i class="fas fa-cog"></i>
                </div>
            </div>
        </header>

        <!-- Category Filter -->
        <div class="category-filter" id="categoryFilter">
            <button class="active" data-filter="all"><i class="fas fa-th"></i> All</button>
            <!-- Categories will be loaded here -->
        </div>

        <!-- Content Area -->
        <main class="content-area" id="homePage">
            <!-- Popular Movies Section -->
            <section class="movie-section" id="popularMoviesSection">
                <div class="section-header">
                    <h3><i class="fas fa-fire"></i> Popular Movies</h3>
                    <a href="#" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
                </div>
                <div class="content-grid" id="popularMoviesGrid">
                    <!-- Popular Movies will be loaded here -->
                </div>
            </section>

            <!-- Latest Movies Section -->
            <section class="movie-section" id="latestMoviesSection">
                <div class="section-header">
                    <h3><i class="fas fa-clock"></i> Latest Movies</h3>
                    <a href="#" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
                </div>
                <div class="content-grid" id="latestMoviesGrid">
                    <!-- Latest Movies will be loaded here -->
                </div>
            </section>

            <!-- Live Channels Section -->
            <section class="channel-section" id="liveChannelsSection">
                <div class="section-header">
                    <h3><i class="fas fa-broadcast-tower"></i> Live Channels</h3>
                    <a href="#" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
                </div>
                <div class="content-grid" id="liveChannelsGrid">
                    <!-- Live Channels will be loaded here -->
                </div>
            </section>
        </main>

        <!-- Bottom Navigation -->
        <nav class="bottom-nav">
            <a href="#" class="nav-item active" data-page="homePage">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
            <a href="#" class="nav-item" data-page="categoriesPage">
                <i class="fas fa-tags"></i>
                <span>Categories</span>
            </a>
            <a href="#" class="nav-item" data-page="bettingTipsPage">
                <i class="fas fa-star"></i>
                <span>Tips</span>
            </a>
            <a href="#" class="nav-item" data-page="profile-page">
                <i class="fas fa-user"></i>
                <span>Profile</span>
            </a>
            <a href="#" class="nav-item" id="logoutNavLink">
                <i class="fas fa-sign-out-alt"></i>
                <span>Logout</span>
            </a>
        </nav>

        <!-- Floating WhatsApp Icon -->
        <a href="#" target="_blank" class="whatsapp-float" id="whatsappFloat" title="Chat with Support">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>

    <!-- Toast Container -->
    <div id="toastContainer"></div>

    <script>
        // Firebase Configuration
        const firebaseConfig = {
            apiKey: "AIzaSyABEnVaSOR5b1FL1V3-C13KoR9O7MqAoHg",
            authDomain: "studio-3650831122-2eea3.firebaseapp.com",
            databaseURL: "https://studio-3650831122-2eea3-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "studio-3650831122-2eea3",
            storageBucket: "studio-3650831122-2eea3.firebasestorage.app",
            messagingSenderId: "893787872699",
            appId: "1:893787872699:web:91268a1b8fb18b7bc4f89e"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const database = firebase.database();

        // Global Variables
        let allMovies = [];
        let allChannels = [];
        let allCategories = [];
        let currentUserData = null;
        let isUserBlocked = false;
        let privacyAccepted = false;

        // DOM Elements
        const loadingScreen = document.getElementById('loadingScreen');
        const privacyModal = document.getElementById('privacyModal');
        const authPages = document.getElementById('authPages');
        const appContainer = document.getElementById('appContainer');
        const acceptBtn = document.getElementById('acceptBtn');
        const declineBtn = document.getElementById('declineBtn');
        const acceptTermsCheckbox = document.getElementById('acceptTerms');

        // Disable Right Click
        document.addEventListener('contextmenu', event => event.preventDefault());

        // Disable Developer Tools (Basic Protection)
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') || 
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                showToast('Developer tools are disabled', 'warning');
            }
        });

        // Premium Loading Animation
        window.addE
