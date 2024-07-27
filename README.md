# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Use Effect

useEffect를 사용하면 최초 1회에만 렌더링이 되고 이후에는 렌더링이 되지 않도록 할 수 있습니다. 즉 useEffect 함수를 사용하면 코드를 딱 한 번만 실행될 수 있도록 합니다. 상태가 변화하던, 다른 어떤일이 일어나도 useEffect를 사용하면 한번만 실행되는 것을 보장할 수 있습니다.

이는 예를 들어 API 호출을 할때 유용하게 사용될 수 있습니다.

이는 매우 중요한 포인트입니다.

만약 input을 받는 상황에서 input에 대한 변화 값을 업데이트하고있다고 가정해봅시다.

이때 이 변하를 업데이트하기 위해 렌더링을 진행할텐데, 이때마다 API 호출을 하게 되면 이는 불필요한 호출을 하게되는 것입니다.

이를 통해 useEffect의 필요성을 알 수 있습니다.

```javascript
const [keyword, setKeyword] = useState("");
const onChange = (event) => {
    setKeyword(event.target.value);
  };
useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
        console.log("search for ", keyword);
    }
  }, [keyword]);
```

위 코드에서는 keyword가 변화할때만 console.log(); 가 실행됩니다.

왜냐하면 useEffect()에서 []안의 keyword의 변경이 일어날때 코드를 실행하기 때문입니다.
이것이 useEffect의 큰 장점입니다.

그래서 만약 [] 빈 배열로 정의한다면 최초의 1번만 실행되는 이유가 바라보고있는 변수가 없기 때문입니다.
