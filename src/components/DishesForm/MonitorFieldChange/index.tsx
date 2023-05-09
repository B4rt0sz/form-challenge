import { Field, FormSpy } from 'react-final-form'
import { OnChange } from 'react-final-form-listeners'

const MonitorFieldChange = ({ field, becomes, set, to }: any) => (
  <Field name={set} subscription={{}}>
    {({ input: { onChange } }) => (
      <FormSpy subscription={{}}>
        {({ form }) => (
          <OnChange name={field}>
            {(value) => {
              if (value === becomes) {
                onChange(to)
              }
            }}
          </OnChange>
        )}
      </FormSpy>
    )}
  </Field>
)

export const MonitorSelectFieldChanges = () => (
  <>
    <MonitorFieldChange field='type' becomes={'pizza'} set='spiciness_scale' to={undefined} />
    <MonitorFieldChange field='type' becomes={'pizza'} set='slices_of_bread' to={undefined} />
    <MonitorFieldChange field='type' becomes={'soup'} set='no_of_slices' to={undefined} />
    <MonitorFieldChange field='type' becomes={'soup'} set='diameter' to={undefined} />
    <MonitorFieldChange field='type' becomes={'soup'} set='slices_of_bread' to={undefined} />
    <MonitorFieldChange field='type' becomes={'sandwich'} set='no_of_slices' to={undefined} />
    <MonitorFieldChange field='type' becomes={'sandwich'} set='diameter' to={undefined} />
    <MonitorFieldChange field='type' becomes={'sandwich'} set='spiciness_scale' to={undefined} />
  </>
)
