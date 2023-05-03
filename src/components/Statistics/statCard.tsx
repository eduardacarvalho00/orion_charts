import {
  Stat, StatLabel, Center, StatNumber, StatHelpText, StatArrow, StatLabelProps, 
} from '@chakra-ui/react';

interface StatCardProps extends StatLabelProps{
  statNumber: string;
  statNumberFontSize: number;
  justifyContent: 'flex-start' | 'center'
}

export function StatCard({
  statNumber, statNumberFontSize, justifyContent, ...rest 
}: StatCardProps) {
  return (
    <Stat>
      <StatLabel
        fontWeight="regular"
        fontSize={20}
        textAlign="center"
        {...rest}
      >
        Total earning
      </StatLabel>

      <Center justifyContent={justifyContent}>
      <StatNumber
        fontWeight="bold"
        fontSize={statNumberFontSize}
        mr="6px"
      >
        $12,875
      </StatNumber>
      <StatHelpText mb="0" color="green.500" fontSize={14}>
        <StatArrow type="increase" color="green.500" />
        {statNumber}%
      </StatHelpText>
      </Center>
      <StatHelpText opacity={0.5} fontSize={12}>
        Compared to $21,504 last year
      </StatHelpText>
    </Stat>
  );
}
