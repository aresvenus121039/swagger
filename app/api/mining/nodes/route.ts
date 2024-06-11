/**
 * @swagger
 * /api/mining/nodes:
 *   post:
 *     description: Create a new nodes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/nodes'
 *     responses:
 *       '200':
 *         description: Create Successfully!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/nodes'
 * 
 * components:
 *   schemas:
 *     nodes:
 *       type: object
 *       properties:
 *         rewardWallet:
 *           type: string
 *         location:
 *           type: string
 *         nodeType:
 *           type: string
 *         status:
 *           type: string
 *         version:
 *           type: string
 *         jwtToken:
 *           type: string
 *         ipAddress: 
 *           type: string
 *         notes:
 *           type: string
 *         cpuAllocation:
 *           type: string
 *         memoryAllocation:
 *           type: string
 *         storageAllocation:
 *           type: string
 *         deployedBy:
 *           type: string
 */
export async function POST(_request: Request) {
  // Do whatever you want
  return new Response('Create Successfully!', {
    status: 200,
  });
}
