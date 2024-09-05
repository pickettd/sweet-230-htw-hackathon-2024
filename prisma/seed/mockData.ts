import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9d1f5dee-b636-4e70-84d5-0981e3b0f2b3', '1Marcellus91@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv11223', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('766e4ddd-67df-4f36-9d9e-ad9318f1f4a7', '8Kody31@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv11223', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('643eed41-246e-4654-949c-d6f21728a317', '22Ernest.Hilll63@hotmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv54321', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('5e349442-b0f9-4d79-8974-5aca153cec10', '29Winona.Beier@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv54321', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('5e7c2ce6-227a-4708-bba0-7cb87726df09', '36Jaunita.Beer@gmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv67890', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('7a68eb60-ff76-4087-b640-f9f24eb86b9a', '43Amely83@hotmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv54321', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('5468146e-3fd4-4e5a-acd4-6d9a33ac1fe7', '50Jadon.Wilkinson@gmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv67890', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('423e5bcb-8051-4f52-93e3-5daab616155a', '57Evie.Leannon8@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv67890', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('34987111-4560-4ec5-be0e-d7cafdc7efa1', '64Florida2@hotmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv67890', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('c1363119-cfcd-4ca8-a1d2-c3303c0b5274', 'z9y8x7w6v5u4t3s2r1q0', '{"degenero":"adeptio","advoco":"bellicus","ciminatio":"comburo","subvenio":"curo","suus":"creo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('833a0f24-2cac-4905-a937-f07dd646b119', 'a1b2c3d4e5f6g7h8i9j0', '{"vorax":"cupiditate","thymum":"validus","surgo":"solium","amor":"vespillo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('63153491-f86b-403b-bfe2-4420347f0a36', 'w1x2y3z4a5b6c7d8e9f0', '{"atque":"volva","universe":"socius","charisma":"vitiosus","claustrum":"super"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('feede1b6-ebdf-43a5-849a-a3a553303526', 'z9y8x7w6v5u4t3s2r1q0', '{"adopto":"substantia","cornu":"truculenter","thermae":"sulum"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('6e174162-e0bb-4201-af90-3eb6d109c2d8', 'm1n2o3p4q5r6s7t8u9v0', '{"carcer":"amiculum","ubi":"amiculum","allatus":"auctus","amplitudo":"dolor","minus":"cibus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4cbb313a-6c5c-48c4-9e02-c3d7d758f33e', 'a1b2c3d4e5f6g7h8i9j0', '{"accusantium":"vespillo","termes":"sub","thymum":"abduco","enim":"suasoria","communis":"baiulus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('a427e9f6-590a-4c56-a8c2-8cc3fbb6822b', 'z9y8x7w6v5u4t3s2r1q0', '{"voco":"approbo","vigor":"deputo","trans":"tracto","ver":"explicabo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('9c97b699-6a48-4419-8c3f-129cb86413f8', 'g1h2i3j4k5l6m7n8o9p0', '{"vociferor":"doloribus","colligo":"cogito","tergo":"caelestis","conitor":"virtus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d68d0ea2-9b91-4176-af0b-a682d928e2f3', 'z9y8x7w6v5u4t3s2r1q0', '{"quia":"ubi","credo":"quidem","pecco":"ex"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4cf4b9fa-1222-428b-87a7-2a1d4f17fa1a', 'z9y8x7w6v5u4t3s2r1q0', '{"atrox":"magni","xiphias":"solio","amissio":"acervus"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e76fd05f-3b6f-41c3-918b-ffd96e699422', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=102');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b3e941dc-dc1c-4566-91a9-454a4ee37c9d', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=105');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('29fd8e28-669c-45c5-9435-79783d861301', 'Global Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=108');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d9573320-5340-43e3-8193-40c720725d11', 'Global Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=111');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('36ab21c2-6517-4e4b-ab3b-89a79700b041', 'Global Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=114');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('f59676ac-f96b-4c0f-bcd1-ca921d8e8e32', 'Future Vision Corp', 'https://i.imgur.com/YfJQV5z.png?id=117');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('1878e18b-9003-4b5e-ab90-c10cfd806bb8', 'Future Vision Corp', 'https://i.imgur.com/YfJQV5z.png?id=120');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('edfa9132-2aa2-473c-bc0d-bd6ea76a07c2', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=123');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ede6e21d-1289-4c2c-bf0d-581b3cdc14e2', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=126');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e49bc8d5-ebdb-4883-9750-934c91ac63fb', 'Pioneer Tech Group', 'https://i.imgur.com/YfJQV5z.png?id=129');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e77148eb-865d-44cf-82fa-54880d82bb2c', 'Manager', '5e7c2ce6-227a-4708-bba0-7cb87726df09', 'ede6e21d-1289-4c2c-bf0d-581b3cdc14e2');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('4872f0ac-ceb9-4efa-ad46-bf4163b9452e', 'Team Lead', '766e4ddd-67df-4f36-9d9e-ad9318f1f4a7', '29fd8e28-669c-45c5-9435-79783d861301');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c83b852e-af35-4a49-a4d2-4de7846aa1ac', 'Manager', '423e5bcb-8051-4f52-93e3-5daab616155a', 'ede6e21d-1289-4c2c-bf0d-581b3cdc14e2');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f5b6ded1-939a-4821-8904-9143023498a6', 'HR Specialist', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e49bc8d5-ebdb-4883-9750-934c91ac63fb');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('3be9e77c-70b3-4080-b404-90d581cdd1a8', 'User', '34987111-4560-4ec5-be0e-d7cafdc7efa1', 'f59676ac-f96b-4c0f-bcd1-ca921d8e8e32');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('2093594b-a540-4465-ab1b-002198eea6ee', 'Admin', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e49bc8d5-ebdb-4883-9750-934c91ac63fb');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fbe44838-6ebd-4b84-8ba3-897f1d0de599', 'Team Lead', '7a68eb60-ff76-4087-b640-f9f24eb86b9a', 'f59676ac-f96b-4c0f-bcd1-ca921d8e8e32');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('eb5a5be0-2c4a-4cf5-b4d5-0fe512dca560', 'HR Specialist', '5e349442-b0f9-4d79-8974-5aca153cec10', '1878e18b-9003-4b5e-ab90-c10cfd806bb8');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('65b3a252-5ad5-4193-b384-b11497aab7da', 'Manager', '34987111-4560-4ec5-be0e-d7cafdc7efa1', 'ede6e21d-1289-4c2c-bf0d-581b3cdc14e2');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('4a125543-9c8f-44ae-b872-ac68ac55c06d', 'HR Specialist', '34987111-4560-4ec5-be0e-d7cafdc7efa1', 'b3e941dc-dc1c-4566-91a9-454a4ee37c9d');

INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('3e9384be-c9d4-4e16-a165-df55a36c1cd4', 'What is the process for reporting workplace harassment', '2023-12-14T16:39:33.688Z', '5e7c2ce6-227a-4708-bba0-7cb87726df09', 'e49bc8d5-ebdb-4883-9750-934c91ac63fb');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('fd341e8b-f77a-42ea-9ed2-7ec8833e53b2', 'Can I carry over unused vacation days to the next year', '2025-05-15T06:16:49.904Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'edfa9132-2aa2-473c-bc0d-bd6ea76a07c2');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('6c5e5798-f032-46a1-ad6f-d4369c676df8', 'What are the health insurance options available', '2025-01-02T23:37:41.824Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'edfa9132-2aa2-473c-bc0d-bd6ea76a07c2');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('2afbf1eb-2d95-4b9b-a8c2-6db401e45991', 'Can I carry over unused vacation days to the next year', '2025-05-26T08:35:28.389Z', '766e4ddd-67df-4f36-9d9e-ad9318f1f4a7', 'e49bc8d5-ebdb-4883-9750-934c91ac63fb');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('af28757c-3fd5-4005-9017-7483134442ac', 'Can I carry over unused vacation days to the next year', '2024-04-12T12:40:43.662Z', '423e5bcb-8051-4f52-93e3-5daab616155a', 'f59676ac-f96b-4c0f-bcd1-ca921d8e8e32');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('964b7de5-71fe-4314-8071-2ad9ebadb862', 'Can I carry over unused vacation days to the next year', '2025-04-19T02:35:09.084Z', '34987111-4560-4ec5-be0e-d7cafdc7efa1', '36ab21c2-6517-4e4b-ab3b-89a79700b041');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('4d85f8c1-af46-4587-ba0e-5f36c54fb5ba', 'What is the process for reporting workplace harassment', '2023-10-12T10:50:04.831Z', '34987111-4560-4ec5-be0e-d7cafdc7efa1', '1878e18b-9003-4b5e-ab90-c10cfd806bb8');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('83f9f908-970c-4a24-9e41-d92cf2145405', 'How do I apply for parental leave', '2025-08-08T15:41:41.784Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e76fd05f-3b6f-41c3-918b-ffd96e699422');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('324d3162-8a6f-403d-bd71-8c8c240024af', 'Can I carry over unused vacation days to the next year', '2023-10-03T10:04:12.206Z', '5468146e-3fd4-4e5a-acd4-6d9a33ac1fe7', '36ab21c2-6517-4e4b-ab3b-89a79700b041');
INSERT INTO "Question" ("id", "content", "dateAsked", "userId", "organizationId") VALUES ('b274c0a9-191a-4869-a0b6-a96364e52e2f', 'What is the companys policy on remote work', '2023-10-28T15:15:02.113Z', '766e4ddd-67df-4f36-9d9e-ad9318f1f4a7', '29fd8e28-669c-45c5-9435-79783d861301');

INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('7cdb93a8-2e62-488e-a566-e4e55b5696d3', 'The company observes all federal holidays.', '2023-10-02T06:32:29.524Z', '3e9384be-c9d4-4e16-a165-df55a36c1cd4');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('91a93b8f-2e4d-4892-bfc9-3effe4c9d1e3', 'Employees are eligible for a 401k plan after 6 months.', '2024-02-26T11:43:20.519Z', '324d3162-8a6f-403d-bd71-8c8c240024af');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('76d94d14-bc87-4f3f-bc68-86c6967a42db', 'Employees are eligible for a 401k plan after 6 months.', '2025-05-22T18:36:02.987Z', '964b7de5-71fe-4314-8071-2ad9ebadb862');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('fbff9f1f-e279-408c-bcbb-ff4a4667a1f5', 'Employees are eligible for a 401k plan after 6 months.', '2025-01-27T20:20:45.476Z', '6c5e5798-f032-46a1-ad6f-d4369c676df8');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('ddb98a9f-0862-4d48-82ba-b0a1db4f1a98', 'Our company offers 15 days of paid time off annually.', '2023-09-30T02:00:19.195Z', '6c5e5798-f032-46a1-ad6f-d4369c676df8');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('cd4e0552-92bf-49e8-934b-2f6023979df9', 'The health insurance plan covers medical dental and vision.', '2024-02-24T18:25:03.864Z', '324d3162-8a6f-403d-bd71-8c8c240024af');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('85861b02-00c2-41de-852d-4bbaf9b4d63b', 'You can apply for leave through the HR portal.', '2025-03-27T10:32:45.055Z', '83f9f908-970c-4a24-9e41-d92cf2145405');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('7b8dc9a0-750c-4d83-a069-7f88b93c0207', 'You can apply for leave through the HR portal.', '2025-04-05T20:05:28.241Z', '4d85f8c1-af46-4587-ba0e-5f36c54fb5ba');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('0216b9da-f1e1-46d7-89a2-0cde33ac4505', 'Employees are eligible for a 401k plan after 6 months.', '2023-11-02T10:48:23.420Z', '2afbf1eb-2d95-4b9b-a8c2-6db401e45991');
INSERT INTO "Answer" ("id", "content", "dateAnswered", "questionId") VALUES ('3bcbd94e-e1df-4e5e-a18d-4334581f450d', 'Our company offers 15 days of paid time off annually.', '2023-12-27T07:52:58.945Z', '4d85f8c1-af46-4587-ba0e-5f36c54fb5ba');

INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('4d79dde1-06a6-434d-a975-5344332af810', 114, '2025-08-12T00:51:01.664Z', 'b3e941dc-dc1c-4566-91a9-454a4ee37c9d');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('3b7837fe-ee31-4f96-b26a-3a48426bde53', 123, '2025-04-22T21:26:08.267Z', 'f59676ac-f96b-4c0f-bcd1-ca921d8e8e32');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('979d13fc-2d6b-456e-b8cc-56cc743f86cd', 129, '2025-03-10T07:38:57.263Z', 'b3e941dc-dc1c-4566-91a9-454a4ee37c9d');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('f6ff81d5-a8da-4d3a-a850-53364a128bf4', 495, '2025-01-08T21:46:59.551Z', '29fd8e28-669c-45c5-9435-79783d861301');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('6cf09645-dab3-4836-9bbc-21671e7e4c76', 940, '2025-08-16T00:55:54.817Z', 'd9573320-5340-43e3-8193-40c720725d11');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('ef6fe024-507a-46fb-8247-0037d1281928', 2, '2025-07-20T19:34:43.772Z', '29fd8e28-669c-45c5-9435-79783d861301');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('27f1aaaf-02eb-4da2-b210-2e7a3bf140e2', 697, '2023-11-10T05:34:42.302Z', '29fd8e28-669c-45c5-9435-79783d861301');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('fc56d479-623b-4a77-93d2-c1ce5ee3dc82', 758, '2025-08-19T06:20:04.130Z', 'd9573320-5340-43e3-8193-40c720725d11');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('6802ce99-08f9-4e72-ba27-554e84bc5aa1', 369, '2024-04-09T09:53:05.630Z', 'edfa9132-2aa2-473c-bc0d-bd6ea76a07c2');
INSERT INTO "BillingData" ("id", "numberOfUsers", "billingDate", "organizationId") VALUES ('a1aec18d-190c-4724-b372-2ae722229f1b', 758, '2024-11-21T22:26:17.382Z', '36ab21c2-6517-4e4b-ab3b-89a79700b041');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
