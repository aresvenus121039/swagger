/**
 * @swagger
 * /api/mining/create:
 *   post:
 *     description: Create a new mining resource
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/resource'
 *     responses:
 *       '200':
 *         description: Create Successfully!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/resource'
 * 
 * components:
 *   schemas:
 *     resource:
 *       type: object
 *       properties:
 *         rewardWallet:
 *           type: string
 *         hashpower:
 *           type: string
 */
export async function POST(_request: Request) {
  // Do whatever you want
  return new Response('Create Successfully!', {
    status: 200,
  });
}
