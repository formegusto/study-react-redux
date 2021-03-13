# Redux Study

# Contents

- 나중에 목차 올거임

# Concept

0. React + Redux는 상태관리를 하는 전용 장소(=store) 에서 상태를 관리하고,
   React 컴포넌트는 그걸 보여주기만 하는 용도.
1. Store : 커다란 JSON의 결정체.
2. Action : Store 및 Store State에 접근하기 위한 방법.
   - type: 액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼.
   - payload : 액션의 실행에 필요한 임의의 데이터.
3. Reducer : 이전 상태와 Action을 합쳐 새로운 state를 만드는 조작.
   - 초기 상태는 Reducer의 디폴트 인수에서 정의됨.
   - 변경된 state는 대체되는 것이 아닌,
     새로운 것이 합성되는 것 철머 쓰여진다.

# Pure Component & Connected Component

- React의 Component 자체는 Redux의 흐름에 타는 것에 불과하고,
  흐름을 타기 위해서는 connect 라고 불리는 함수를 이용한다.

```javascript
connect(mapStateToProps, mapDispatchToProps)(component);
/*
    mapStateToProps : NewState,
    mapDispatchToProps : Dispatch
*/
```
