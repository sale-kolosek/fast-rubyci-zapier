// /* globals describe, expect, test */

// const zapier = require('zapier-platform-core');

// const App = require('../index');
// const appTester = zapier.createAppTester(App);

// describe('triggers', () => {
//   test('new build pass', async () => {
//     const results = await appTester(
//       // your in-line function takes the same [z, bundle] arguments as normal
//       async (z, bundle) => {
//         // requests are made using your integration's actual middleware
//         // make sure to pass the normal `bundle` arg to `appTester` if your requests need auth
//         const response = await z.request(
//           'https://24a9-109-121-61-93.ngrok-free.app/api/passed_builds',
//           {
//             params: {
//             	branch: bundle.inputData.branch
//             },
//           }
//         );

//         return {
//           data: response.data,
//         };
//       },
//       {
//         // you must provide auth data for authenticated requests
//         // (just like running a normal trigger)
//         authData: { apiKey: 'Ma8pVDStntQMDfjwyXV1Mw' },
//         // put arbitrary function params in `inputData`
//         inputData: {
//         	branch: 'Test 1'
//         },
//       }
//     );

//     expect(results.data).toEqual([
//       {
//           "id": 1000021,
//           "status": "passed",
//           "repo_name": "TestProject1",
//           "owner": "sale",
//           "author": "sale-kolosek",
//           "commit": "das231sda123132",
//           "commit_msg": "Commit 1",
//           "branch_name": "Test 1"
//       }
//     ]);
//   });
// });
