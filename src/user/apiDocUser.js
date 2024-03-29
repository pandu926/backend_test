/**
 *  @swagger
 * /auth/register:
 *  post:
 *      tags:
 *          - auth
 *      summary: register api
 *      description: api untuk membuat user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           username:
 *                              type: string
 *                              example: ahmadpandu
 *                           email:
 *                              type: string
 *                              example: pandu@gmail.com
 *                           password:
 *                              type: string
 *                              example: Pandu@123
 *
 *      responses:
 *              '200':
 *                 description: register sukses
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  fullname:
 *                                      type: string
 *                                      example: ahmad pandu
 *                                  email:
 *                                      type: string
 *                                      example: pandu@gmail.com
 *                                  password:
 *                                      type: string
 *                                      example: pandu
 *                                  token:
 *                                      type: string
 *                                      example: 156562
 *              '400':
 *                 description: register gagal username sudah terdaftar
 *
 */

/**
 *  @swagger
 * /auth/forget_password:
 *  post:
 *      tags:
 *          - auth
 *      summary: forget password
 *      description: api untuk merubah password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           token:
 *                              type: string
 *                              example: 123123
 *                           password:
 *                              type: string
 *                              example: pandu
 *
 *      responses:
 *              '200':
 *                 description: update sukses
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  username:
 *                                      type: string
 *                                      example: ahmad pandu
 *                                  email:
 *                                      type: string
 *                                      example: pandu@gmail.com
 *                                  password:
 *                                      type: string
 *                                      example: pandu
 *              '400':
 *                 description: token salah
 *
 */
/**
 *  @swagger
 * /auth/login:
 * 
 *  post:
 *      tags:
 *          - auth
 *      summary: login api
 *      description: api untuk login user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           username:
 *                              type: string
 *                              example: pand@gmail.com
 *                           password:
 *                              type: string
 *                              example: Manusia090@ 
 * 
 *      responses:
 *              '200':
 *                 description: login sukses
 *                 content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  accessToken: 
 *                                      type: string
 *                                      example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZnVsbG5hbWUiOiJhaG1hZCBwYW5kdSIsImVtYWlsIjoicGFuZEBnbWFpbC5jb20iLCJpYXQiOjE2NjA1MjQ4NzcsImV4cCI6MTY2MDYxMTI3N30.q-iXCojLVsnwjTGXkJqMmk4oM8PqwIff-I683uTdJwQ

 *              '400':
 *                 description: email atau password salah
 *                  
 */
