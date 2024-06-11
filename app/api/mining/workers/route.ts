/**
 * @swagger
 * /api/mining/workers:
 *   post:
 *     description: Create a new workers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/workers'
 *     responses:
 *       '200':
 *         description: Create Successfully!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workers'
 * 
 * components:
 *   schemas:
 *     workers:
 *       type: object
 *       properties:
 *         workerType:
 *           type: string
 *         status:
 *           type: string
 *         expiration:
 *           type: string
 *         hashRate:
 *           type: integer
 *         jwtToken:
 *           type: string
 *         errors: 
 *           type: string
 *         notes:
 *           type: string
 *         configurationDetails:
 *           type: string
 *         uptime:
 *           type: string
 *         maintenanceSchedule:
 *           type: string
 */
export async function POST(_request: Request) {
  // Do whatever you want
  return new Response('Create Successfully!', {
    status: 200,
  });
}
