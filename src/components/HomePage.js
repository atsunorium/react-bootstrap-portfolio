import React from 'react'
import { Link } from 'react-router-dom'
import illustratorImage from "../Images/illustrator.svg";
import jsImage from "../Images/js.png";
import phpImage from "../Images/php.svg";
import profileImage from "../Images/profile.jpg";
import laravelImage from "../Images/laravel.svg";
import reactImage from "../Images/react.svg";


const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Hitaka Atsunori</h1>

      <img src={profileImage} className="profileImage" />

      <p>
      飛髙 篤実(ひたか あつのり)です。1990年生まれ。大分県大分市出身。高校卒業後、3年生の専門学校で学び作業療法士国家資格を取得。県内の病院に就職し、リハビリテーション部で作業療法士として勤務。2019年に退職後、職業訓練校でWebデザインの基礎を学び、IT関連の会社にWebデザイナー&コーダーとして転職。HP制作のコーディングを中心に担当。主にHTML/CSS/JavaScript/PHPメインに取り扱っています。趣味は読書、アジングです。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>

          <div class="row text-center">
            <div class="col-md-4">
            <a href="https://portfolio01.hitaka-design.com" target="_blank">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fa-brands fa-wordpress fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">WordPressサイト1</h4>
              </a>
              <p class="text-muted">
                「あじさい整骨院」という整骨院を想定した架空サイトです。予約機能はプラグインで導入しています。自作テーマ使用。
              </p>
            </div>

            <div class="col-md-4">
            <a href="https://portfolio02.hitaka-design.com" target="_blank">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fa-brands fa-wordpress fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">WordPressサイト2</h4>
              </a>
              <p class="text-muted">
                「株式会社KGO」という工業系の企業を想定したコーポレートサイトです。ロゴの色はSDGsの8,9,11,12を使用しています。自作テーマ使用。
              </p>
            </div>

            <div class="col-md-4">
              <Link to="/dtp">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fa-solid fa-palette fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">DTP</h4>
              </Link>
              <p class="text-muted">
                Adobe Illustrator, Photoshopを使用して作成しました。
              </p>
            </div>

          </div>

          <div class="row text-center">
            <div class="col-md-4">
            <a href="https://portfolio03.hitaka-design.com/portfolio03/public/login" target="_blank">
              <div>
                <img src={laravelImage} className="appIcon"/>
              </div>
              <h4 class="my-3">Laravelアプリ</h4>
              </a>
              <p class="text-muted">
                学習用にLaravelで本登録サイトを作成しました。以下のログイン名とパスワードで入れます。
                <ul>
                  <li>ログインメールアドレス:test@test.com</li>
                  <li>ログインパスワード:12345678</li>
                </ul>
              </p>
            </div>

            <div class="col-md-4">
            <a href="https://pokemon-app-rho-six.vercel.app/" target="_blank">
              <div>
                <img src={reactImage} className="appIcon"/>
              </div>
              <h4 class="my-3">Reactアプリ</h4>
              </a>
              <p class="text-muted">
                学習用にPokemonAPIで、ポケモン図鑑を作成しました。
              </p>
            </div>

          </div>

        </div>
      </section>

      <section id="skill" class="pb-5">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={illustratorImage} />
              <h4>デザインツール</h4>
              <p>Illustrator / Photoshop / Figmaが使えます。</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS/JavaScript</h4>
              <p>HTML/CSS/JavaScriptが使えます。</p>
            </div>
            <div class="col-md-4 services">
              <img src={phpImage} />
              <h4>PHP</h4>
              <p>WordPressでテーマの作成が行えます。</p>
            </div>
          </div>
          <a href="mailto:atsunorihitaka@gmail.com" class="btn btn-primary p-4 mt-5">
            お問い合わせ
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage