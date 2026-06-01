<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Welcome Contributor | Fork, Commit, Merge</title>

    <!-- Font Awesome 6 (Free Icons) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <!-- Google Fonts: Poppins & Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(145deg, #0B1120 0%, #19213C 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow-x: hidden;
            padding: 1.5rem;
        }

        /* Animated Background Orbs */
        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.4;
            z-index: 0;
            animation: float 20s infinite alternate ease-in-out;
        }

        .orb-1 {
            width: 40vw;
            height: 40vw;
            background: #8B5CF6;
            top: -10%;
            left: -10%;
            animation-duration: 25s;
        }

        .orb-2 {
            width: 35vw;
            height: 35vw;
            background: #3B82F6;
            bottom: -15%;
            right: -10%;
            animation-duration: 30s;
            animation-delay: -5s;
        }

        .orb-3 {
            width: 25vw;
            height: 25vw;
            background: #EC4899;
            top: 40%;
            left: 60%;
            animation-duration: 20s;
            animation-delay: -10s;
            opacity: 0.2;
        }

        @keyframes float {
            0% {
                transform: translate(0, 0) scale(1);
            }
            100% {
                transform: translate(5%, 5%) scale(1.1);
            }
        }

        /* Main Card */
        .card {
            position: relative;
            z-index: 10;
            max-width: 680px;
            width: 100%;
            background: rgba(15, 25, 45, 0.65);
            backdrop-filter: blur(16px);
            border-radius: 3rem;
            padding: 2.8rem 2.5rem;
            text-align: center;
            box-shadow: 0 30px 50px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.15);
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 40px 60px rgba(0, 0, 0, 0.5);
            border-color: rgba(139, 92, 246, 0.5);
        }

        /* Icon Ring */
        .icon-ring {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
            width: 110px;
            height: 110px;
            margin: 0 auto 1.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid rgba(139, 92, 246, 0.5);
            animation: pulseRing 2.5s infinite;
        }

        @keyframes pulseRing {
            0% {
                box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
            }
            70% {
                box-shadow: 0 0 0 18px rgba(139, 92, 246, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
            }
        }

        .icon-ring i {
            font-size: 58px;
            color: white;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        /* Badge */
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(139, 92, 246, 0.2);
            backdrop-filter: blur(8px);
            padding: 0.5rem 1.2rem;
            border-radius: 100px;
            margin-bottom: 1.8rem;
            border: 1px solid rgba(139, 92, 246, 0.4);
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            color: #C4B5FD;
        }

        .badge i {
            font-size: 14px;
        }

        /* Title */
        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #FFFFFF, #C4B5FD, #A78BFA);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            margin-bottom: 1.2rem;
            letter-spacing: -0.5px;
        }

        /* Description */
        .description {
            color: #B9C3E6;
            font-size: 1.08rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            font-weight: 400;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Stats Row */
        .stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2.2rem;
            flex-wrap: wrap;
        }

        .stat-item {
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
            padding: 0.6rem 1.2rem;
            border-radius: 2rem;
            min-width: 100px;
            backdrop-filter: blur(4px);
        }

        .stat-number {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            display: block;
            line-height: 1.2;
        }

        .stat-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #9CA3AF;
        }

        /* Button Group */
        .button-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 0.9rem 1.8rem;
            border-radius: 2.5rem;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            border: none;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(8px);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .btn-primary {
            background: linear-gradient(95deg, #8B5CF6, #3B82F6);
            border: none;
            box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(139, 92, 246, 0.5);
            background: linear-gradient(95deg, #9b6efc, #4b90ff);
        }

        .btn-outline:hover {
            background: rgba(255, 255, 255, 0.12);
            transform: translateY(-2px);
            border-color: rgba(139, 92, 246, 0.8);
        }

        /* Footer */
        .footer {
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 1.6rem;
            margin-top: 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 0.8rem;
            color: #7C8AB0;
        }

        .social-links {
            display: flex;
            gap: 1rem;
        }

        .social-links a {
            color: #8B9AC0;
            transition: color 0.2s;
            font-size: 1rem;
        }

        .social-links a:hover {
            color: white;
        }

        @media (max-width: 550px) {
            .card {
                padding: 1.8rem;
            }
            h1 {
                font-size: 2.2rem;
            }
            .stats {
                gap: 1rem;
            }
            .stat-item {
                min-width: 70px;
                padding: 0.4rem 0.8rem;
            }
            .button-group {
                flex-direction: column;
                align-items: center;
            }
            .btn {
                width: 80%;
                justify-content: center;
            }
            .footer {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>

<div class="orb orb-1"></div>
<div class="orb orb-2"></div>
<div class="orb orb-3"></div>

<div class="card">
    <div class="icon-ring">
        <i class="fas fa-code-branch"></i>
    </div>

    <div class="badge">
        <i class="fas fa-github-alt"></i>
        <span>Fork · Commit · Merge</span>
        <i class="fas fa-check-circle" style="color: #22C55E;"></i>
    </div>

    <h1>Welcome,<br>Contributor!</h1>

    <div class="description">
        You've successfully completed your first open‑source contribution.<br>
        This is just the start — let's build amazing things together!
    </div>

    <div class="stats">
        <div class="stat-item">
            <span class="stat-number">#3336</span>
            <span class="stat-label">Issue</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">Laravel</span>
            <span class="stat-label">Stack</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">✨ 1st PR</span>
            <span class="stat-label">Milestone</span>
        </div>
    </div>

    <div class="button-group">
        <a href="https://github.com/fork-commit-merge/fork-commit-merge" target="_blank" class="btn btn-primary">
            <i class="fab fa-github"></i> Star Repository
        </a>
        <a href="https://github.com/fork-commit-merge/fork-commit-merge/issues" target="_blank" class="btn btn-outline">
            <i class="fas fa-arrow-right"></i> Next Challenge
        </a>
    </div>

    <div class="footer">
        <div>
            🚀 Made with passion for the open‑source galaxy
        </div>
        <div class="social-links">
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Discord"><i class="fab fa-discord"></i></a>
            <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        </div>
    </div>
</div>

<!-- tiny hover effect for buttons-->
<script>
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', (e) => {
            btn.style.transition = 'all 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
        });
    });
</script>
</body>
</html>
