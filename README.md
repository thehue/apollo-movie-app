# Apollo movie app 2021

Movie app built with React, Apollo and GraphQL<br>
GraphQL API + typescript + React 참고용

## Set up

```
yarn add styled-components react-router-dom @apollo/client graphql
yarn add @types/styled-components @types/react-router-dom
```

example

```
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});
```

## Apollo란?

> Apollo란 GraphQL의 클라이언트 라이브러리 중 하나로 GraphQL을 사용한다면 거의 필수적으로 사용하는 상태 관리 플랫폼
> 다른 선택지로 GraphQL을 개발한 Facebook에서 직접 만든 Relay가 있지만, 학습 비용이 높고 React 계열만 지원한다는 단점이 있으며, 그에 반해 Apollo는 유연하고 러닝 커브가 높지 않을뿐더러 Front-End 프레임워크 삼대장?인 React, Agular, Vue를 동시 지원한다는 점에서 인기가 높다.
> 특히, 뷰에서 React를 쓸 경우 조합이 금상첨화가 되는데, 그 악명 높은 Redux를 Apollo로 대체가 가능해집니다.
> (GraphQL과 Apollo를 쓰면, REST API와 Redux를 없애버릴 수 있습니다...)
> Apollo Client는 GrpahQL API를 호출하기 위해 사용되는 라이브러리입니다.

출처: https://sddev.tistory.com/120
