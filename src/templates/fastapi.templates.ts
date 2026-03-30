import { Template } from "../types/tempalte.interface.js";

export default [
    {
        title: 'Get request with parameters',
        content: `
@router.get("/big-sets/{big_set_id}", response_model=BigSetFull)
async def read_big_set(big_set_id: int, db: Session = Depends(get_db), big_set_service: BigSetService = Depends()):
    return big_set_service.get_big_set_full(big_set_id)
`
    },
    {
        title: 'Declare and inject service',
        content:`

class StatsService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db

    def get_stats_by_day(self, day: date) -> StatsItem:
        """
        Get big set by id
        """
        big_sets = self.db.query(BigSet).filter(cast(BigSet.created, Date) == day).all()
        return StatsItem(
            id=uuid.uuid4(),
            date=day,
            big_sets=big_sets
        )


@router.get("***", response_model=***)
async def ***(***, stats_service: StatsService = Depends()):
    ...
        `
    }
] as Template[];
