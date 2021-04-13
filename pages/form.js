import firebase from '../lib/db';
// import firebase from 'firebase/app'
// import initFirebase from '../lib/db'
import React from 'react';

// initFirebase();

export default class Posts extends React.Component {
  static async getInitialProps() {
    // db.jsのfirebaseのDB接続ファンクション
    // DBのpostsコレクション内を全て取得した結果 = result
    let result = await new Promise((resolve, reject) => {
      firebase.firestore().collection('contact')
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(
            Object.assign({
              id: doc.id
            }, doc.data())
          )
        })
        resolve(data)
        console.log(data);
      }).catch(error => {
        reject([])
      })
    })
    return {posts: result}
  }

  handleDelete = (id) => {
    console.log(id)
  }

  render() {
    const posts = this.props.posts
    return (
        <>
                {posts.map(post =>
                    <div className="post" key={post.id}>
                        <h2>
                            {post.name}
                        </h2>
                        <p>
                            {post.email}
                        </p>
                        <button onClick={this.handleDelete.bind(this, post.id)}>idチェック</button>
                    </div>
                    )}
            <style jsx>{`
            .post {
                width: 40%;
                border: 1px solid black;
                background-color: gray;
                margin-bottom: 10px;
            }
            `}</style>
        </>
    );
  }
}

// export const getFirebaseText = async () => {
//   const querySnapshot = await firebase
//   .firestore()
//   .collection('form')
//   .get()
// }

// console.log(getFirebaseText);


//  class CreatePost extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             body: ''
//         };
//     }
//     registerPost = async (evt) => {
//         evt.preventDefault();
//         db.collection("posts").add({
//             title: this.state.title,
//             state: this.state.body,
//         })
//         .then(function() {
//             console.log("Document successfully written!");
//         })
//         .catch(function(error) {
//             console.error("Error writing document: ", error);
//         });
//     }
//     onChangeTitle = (evt) => {
//         this.setState({ title: evt.target.value });
//     }
//      onChangeBody = (evt) => {
//         this.setState({ body: evt.target.value });
//     }
//      render() {
//         return (
//             <div className="post-forms">
//                 <form onSubmit={this.registerPost}>
//                     <label htmlFor="title">タイトル</label><br/>
//                     <input name="title" value={this.state.title} onChange={this.onChangeTitle} /><br/>
//                     <label htmlFor="body">本文</label><br/>
//                     <textarea name="body" value={this.state.body} onChange={this.onChangeBody}></textarea><br/>
//                     <button type="submit">投稿</button>
//                 </form>
//                 <style jsx>{`
//                 .post-forms {
//                     width: 80%;
//                     height: 50%;
//                     margin: 0 auto;
//                 }
//                 input, textarea {
//                     width: 70%;
//                 }
//                 textarea {
//                     height: 100px;
//                 }
//             `}</style>
//             </div>
//         )
//     }
// }
//  export default CreatePost;