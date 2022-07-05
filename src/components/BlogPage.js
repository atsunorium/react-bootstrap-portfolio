import React from 'react'
import dtp1 from '../Images/dtp1.jpg'
import dtp2 from '../Images/dtp2.jpg'
import dtp3 from '../Images/dtp3.jpg'
import dtp4 from '../Images/dtp4.jpg'
import dtp5 from '../Images/dtp5.jpg'
import dtp6 from '../Images/dtp6.jpg'

const BlogPage = () => {
  return (
    <div className="container">
      <h1>DTP</h1>
      <div className="row">
        <div className="col-md-6 mb-5">
          <figure><img src={dtp1} alt="dtp1"/></figure>
          <h2>DTP1:春の屋外マルシェのイベント案内チラシ</h2>
          <ul>
            <li>制作時間:4時間</li>
            <li>使用ツール:Illustrator,  Photoshop</li>
            <li>ターゲット:20〜50代女性</li>
            <li>目的:集客、認知度拡大</li>
            <li>配色:春らしい優しいトーンを使用。</li>
            <li>レイアウト:タイトル周りに余白をとることで視認性向上を図りました。下部分は動きを出すために斜めに区切って情報を配置しています。</li>
            <li>自分で撮影した写真を使用しています。</li>
          </ul>
        </div>

        <div className="col-md-6 mb-5">
        <figure><img src={dtp2} alt="dtp2" /></figure>
          <h2>DTP2:家具屋の新生活応援キャンペーンの案内チラシ</h2>
          <ul>
            <li>制作時間:4時間</li>
            <li>使用ツール:Illustrator,  Photoshop</li>
            <li>サイズ:A4</li>
            <li>ターゲット:10〜20代の新生活を迎える方</li>
            <li>目的:集客、購買促進</li>
            <li>配色:上部は軽やかな軽い色を使用。</li>
            <li>レイアウト:季節感を演出するため、桜のイラストを春に被せて配置。優しく温かいイメージにするため細めの丸ゴシックを使用しました。</li>
          </ul>
        </div>

        <div className="col-md-6 mb-5">
          <figure><img src={dtp3} alt="dtp3" /></figure>
          <h2>DTP3:喫茶店の新メニュー発売の案内チラシ</h2>
          <ul>
            <li>制作時間:4時間</li>
            <li>使用ツール:Illustrator,  Photoshop</li>
            <li>サイズ:A4</li>
            <li>ターゲット:10〜30代</li>
            <li>目的:集客、新メニューの周知。</li>
            <li>配色:使用する色を絞ることで、シンプルで統一感のあるものにしました。</li>
            <li>レイアウト:写真の右側を裁ち落とすことで、広がりを感じるようにしました。見せたい写真の周りに余白を付け、タイトルの一部を写真に被せました。</li>
          </ul>
        </div>

        <div className="col-md-6 mb-5">
          <figure><img src={dtp4} alt="dtp4" /></figure>
          <h2>DTP4:和カフェの冬季限定メニューの案内チラシ</h2>
          <ul>
            <li>制作時間:4時間</li>
            <li>使用ツール:Illustrator,  Photoshop</li>
            <li>サイズ:A4</li>
            <li>ターゲット:20〜60代</li>
            <li>目的:集客、冬季限定メニューの宣伝</li>
            <li>配色:抹茶のグリーン、温かみのあるクリーミーな茶色</li>
            <li>レイアウト:上部に写真、下部に和紙風の素材を背景に選びました。ゆるい空気感を出すため、細身のフォントを使用しました。</li>
          </ul>
        </div>

        <div className="col-md-6 mb-5">
          <figure><img src={dtp5} alt="dtp5" /></figure>
          <h2>DTP5:秋のオーケストラコンサートの案内チラシ</h2>
          <ul>
            <li>制作時間:4時間</li>
            <li>使用ツール:Illustrator,  Photoshop</li>
            <li>サイズ:A4</li>
            <li>ターゲット:小学生以上</li>
            <li>目的:集客、コンサート・イベントの周知。</li>
            <li>配色:ブラックは夜、ブラウンはヴァイオリンの色をイメージ。タイトルに高級感のあるゴールドを使用。</li>
            <li>レイアウト:上部にタイトル＋ビジュアル、下部の情報をまとめてメリハリのある構成にしました。エレガントな雰囲気を出すため、セリフ体、明朝体を使用しました。</li>
          </ul>
        </div>

        <div className="col-md-6 mb-5">
          <figure><img src={dtp6} alt="dtp6" /></figure>
          <h2>DTP6:企業広告の求人案内チラシ</h2>
          <ul>
            <li>制作時間:4時間</li>
            <li>使用ツール:Illustrator,  Photoshop</li>
            <li>サイズ:A4</li>
            <li>ターゲット:20〜30代</li>
            <li>目的:求人による人材獲得</li>
            <li>配色:色数はできるだけ抑え、知的、誠実、信頼をイメージするブルー系を使用。</li>
            <li>レイアウト:Zの視線の流れを意識した構図を意識しました。各見出しには、付箋風の色べたの飾りにゴシック体を使用し視認性を高めています。</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default BlogPage